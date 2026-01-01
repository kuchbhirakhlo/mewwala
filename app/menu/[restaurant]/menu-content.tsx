"use client"

import { useEffect, useState } from "react"
import { doc, safeGetDoc, setDoc, query, where, getDocs, collection, safeGetDocs } from "@/lib/firebase"
import { db } from "@/lib/firebase"
import { updateDoc, increment, serverTimestamp } from "firebase/firestore"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Pizza, QrCode, Star, Clock, MapPin, Phone, Heart, ShoppingCart, Search, Filter, X } from "lucide-react"
import React from "react"
import Link from "next/link"
import Image from "next/image"

interface MenuItem {
  name: string
  description: string
  price: number
  image?: string
}

interface Category {
  name: string
  items: MenuItem[]
}

interface Menu {
  name: string
  description: string
  categories: Category[]
  restaurantId: string
  viewCount?: number
  whatsappNumber?: string
}

export function MenuContent({ restaurant }: { restaurant: string }) {
  const [menu, setMenu] = useState<Menu | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [cart, setCart] = useState<{ [key: string]: { item: MenuItem, quantity: number } }>({});
  const [placingOrder, setPlacingOrder] = useState(false);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [orderDialogOpen, setOrderDialogOpen] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const [customerMobile, setCustomerMobile] = useState("");
  const [roomTableNumber, setRoomTableNumber] = useState("");
  const [ratingDialogOpen, setRatingDialogOpen] = useState(false);
  const [ratingCustomerName, setRatingCustomerName] = useState("");
  const [ratingCustomerMobile, setRatingCustomerMobile] = useState("");
  const [ratingValue, setRatingValue] = useState(0);
  const [submittingRating, setSubmittingRating] = useState(false);
  const [averageRating, setAverageRating] = useState(0);
  const [totalRatings, setTotalRatings] = useState(0);

  const handlePlaceOrder = () => {
    if (Object.keys(cart).length === 0 || !menu?.whatsappNumber) return;
    setOrderDialogOpen(true);
  };

  const handleSubmitOrder = async () => {
    if (!customerName || !customerMobile || !roomTableNumber || !menu) return;
    setPlacingOrder(true);

    // Calculate total amount at the time of order
    const currentTotal = Object.values(cart).reduce((sum, entry) => sum + entry.item.price * entry.quantity, 0);

    let message = `🍽️ *New Order from: ${menu?.name || ''}*\n\n`;
    message += `👤 *Customer Name:* ${customerName}\n`;
    message += `📱 *Mobile:* ${customerMobile}\n`;
    message += `🏠 *Room/Table:* ${roomTableNumber}\n\n`;
    Object.values(cart).forEach((entry, idx) => {
      message += `${idx + 1}. ${entry.item.name} x${entry.quantity} - ₹${(entry.item.price * entry.quantity).toFixed(2)}\n`;
    });
    message += `\n💰 *Total: ₹${currentTotal.toFixed(2)}*\n\nThank you for choosing us! 🙏`;

    // Save to Firestore
    try {
      await setDoc(doc(collection(db, "orders")), {
        restaurantId: menu!.restaurantId,
        customerName,
        customerMobile,
        roomTableNumber,
        items: Object.values(cart).map(entry => ({ name: entry.item.name, quantity: entry.quantity, price: entry.item.price })),
        total: currentTotal,
        timestamp: serverTimestamp(),
        status: 'pending'
      });
    } catch (error) {
      console.error("Error saving order:", error);
    }

    setTimeout(() => {
      setPlacingOrder(false);
      setOrderDialogOpen(false);
      // Reset form
      setCustomerName("");
      setCustomerMobile("");
      setRoomTableNumber("");
      setCart({});
      const url = `https://wa.me/${menu!.whatsappNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
    }, 1200);
  };

  const handleSubmitRating = async () => {
    if (!ratingCustomerName || !ratingCustomerMobile || ratingValue === 0 || !menu) return;
    setSubmittingRating(true);

    try {
      await setDoc(doc(collection(db, "ratings")), {
        restaurantId: menu.restaurantId,
        customerName: ratingCustomerName,
        customerMobile: ratingCustomerMobile,
        rating: ratingValue,
        timestamp: serverTimestamp(),
      });

      // Refetch ratings to update the display
      try {
        const ratingsQuery = query(collection(db, "ratings"), where("restaurantId", "==", menu.restaurantId));
        const ratingsSnapshot = await safeGetDocs(ratingsQuery);
        const ratings = ratingsSnapshot.docs.map(doc => doc.data());

        if (ratings.length > 0) {
          const avgRating = ratings.reduce((sum, r) => sum + r.rating, 0) / ratings.length;
          setAverageRating(avgRating);
          setTotalRatings(ratings.length);
        } else {
          setAverageRating(0);
          setTotalRatings(0);
        }
      } catch (fetchError) {
        console.error("Error refetching ratings:", fetchError);
      }

      setRatingDialogOpen(false);
      setRatingCustomerName("");
      setRatingCustomerMobile("");
      setRatingValue(0);
    } catch (error) {
      console.error("Error submitting rating:", error);
    } finally {
      setSubmittingRating(false);
    }
  };

  const handleAddToCart = (item: MenuItem) => {
    const currentTotalItems = Object.values(cart).reduce((sum, entry) => sum + entry.quantity, 0);
    if (currentTotalItems >= 4) {
      alert("Maximum 4 items allowed per order");
      return;
    }
    setCart(prev => {
      const key = item.name;
      if (prev[key]) {
        return prev;
      } else {
        return { ...prev, [key]: { item, quantity: 1 } };
      }
    });
  };

  const handleIncrement = (item: MenuItem) => {
    const currentTotalItems = Object.values(cart).reduce((sum, entry) => sum + entry.quantity, 0);
    if (currentTotalItems >= 4) {
      alert("Maximum 4 items allowed per order");
      return;
    }
    setCart(prev => {
      const key = item.name;
      if (prev[key]) {
        return { ...prev, [key]: { item, quantity: prev[key].quantity + 1 } };
      }
      return prev;
    });
  };

  const handleDecrement = (item: MenuItem) => {
    setCart(prev => {
      const key = item.name;
      if (prev[key]) {
        const newQty = prev[key].quantity - 1;
        if (newQty > 0) {
          return { ...prev, [key]: { item, quantity: newQty } };
        } else {
          const { [key]: _, ...rest } = prev;
          return rest;
        }
      }
      return prev;
    });
  };

  const toggleFavorite = (itemName: string) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(itemName)) {
        newFavorites.delete(itemName);
      } else {
        newFavorites.add(itemName);
      }
      return newFavorites;
    });
  };

  const totalAmount = Object.values(cart).reduce((sum, entry) => sum + entry.item.price * entry.quantity, 0);
  const totalItems = Object.values(cart).reduce((sum, entry) => sum + entry.quantity, 0);

  // Filter and search logic
  const filteredCategories = menu?.categories.map(category => ({
    ...category,
    items: category.items.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = !selectedCategory || category.name === selectedCategory;
      return matchesSearch && matchesCategory;
    })
  })).filter(category => category.items.length > 0) || [];

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory(null);
  };

  const hasActiveFilters = searchTerm || selectedCategory;

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        // Convert restaurant parameter back to search format
        // The QR code converts spaces to hyphens and makes it lowercase
        // So we need to reverse this process
        const searchTerm = restaurant.replace(/-/g, ' ').toLowerCase();
        
        // Get all menus and find the matching one
        const querySnapshot = await getDocs(collection(db, "menus"));
        
        let matchingMenuDoc = null;
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          const menuName = (data.name || '').toLowerCase();
          const restaurantName = (data.restaurantName || data.name || '').toLowerCase();

          // Check if either name matches our search term
          if (menuName === searchTerm || restaurantName === searchTerm) {
            matchingMenuDoc = { id: doc.id, data };
          }
        });
        
        if (!matchingMenuDoc) {
          setError("Menu not found");
          return;
        }
        
        // Type assertion to tell TypeScript that matchingMenuDoc is not null here
        const menuDoc = matchingMenuDoc as { id: string; data: Menu };
        const menuData = menuDoc.data;
        setMenu(menuData);

        // Fetch ratings for this restaurant
        try {
          const ratingsQuery = query(collection(db, "ratings"), where("restaurantId", "==", menuData.restaurantId));
          const ratingsSnapshot = await safeGetDocs(ratingsQuery);
          const ratings = ratingsSnapshot.docs.map(doc => doc.data());

          if (ratings.length > 0) {
            const avgRating = ratings.reduce((sum, r) => sum + r.rating, 0) / ratings.length;
            setAverageRating(avgRating);
            setTotalRatings(ratings.length);
          } else {
            setAverageRating(0);
            setTotalRatings(0);
          }
        } catch (error) {
          console.error("Error fetching ratings:", error);
          setAverageRating(0);
          setTotalRatings(0);
        }
        
        try {
          await updateDoc(doc(db, "menus", menuDoc.id), {
            viewCount: increment(1),
            lastViewed: serverTimestamp()
          });

          const deviceInfo = getDeviceInfo();
          const referrerInfo = document.referrer || 'direct';
          const screenSize = `${window.innerWidth}x${window.innerHeight}`;
          const uniqueViewId = `${menuDoc.id}_${Date.now()}_${Math.random().toString(36).substring(2, 10)}`;

          const viewsRef = doc(db, "menu_views", uniqueViewId);
          await setDoc(viewsRef, {
            menuId: menuDoc.id,
            timestamp: serverTimestamp(),
            restaurantId: menuData.restaurantId || 'unknown',
            userAgent: navigator.userAgent,
            deviceType: deviceInfo.deviceType,
            deviceVendor: deviceInfo.vendor,
            browserName: deviceInfo.browserName,
            referrer: referrerInfo,
            screenSize: screenSize,
            language: navigator.language || 'unknown',
            timeOfDay: new Date().getHours(),
            dayOfWeek: new Date().getDay()
          });
        } catch (trackingError) {
          console.error("Error tracking menu view:", trackingError);
        }
      } catch (err) {
        console.error("Error fetching menu:", err)
        setError("Failed to load menu")
      } finally {
        setLoading(false)
      }
    }

    fetchMenu()
  }, [restaurant])

  const getDeviceInfo = () => {
    const ua = navigator.userAgent;
    let deviceType = 'unknown';
    let vendor = 'unknown';
    let browserName = 'unknown';

    if (/Mobile|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua)) {
      if (/iPad|Tablet|PlayBook|Silk|Android(?!.*Mobile)/i.test(ua)) {
        deviceType = 'tablet';
      } else {
        deviceType = 'mobile';
      }
    } else {
      deviceType = 'desktop';
    }

    if (/iPhone|iPad|iPod/i.test(ua)) {
      vendor = 'Apple';
    } else if (/Android/i.test(ua)) {
      if (/Samsung/i.test(ua)) {
        vendor = 'Samsung';
      } else if (/LG/i.test(ua)) {
        vendor = 'LG';
      } else if (/HTC/i.test(ua)) {
        vendor = 'HTC';
      } else if (/Sony/i.test(ua)) {
        vendor = 'Sony';
      } else {
        vendor = 'Android';
      }
    } else if (/Windows/i.test(ua)) {
      vendor = 'Microsoft';
    } else if (/Macintosh/i.test(ua)) {
      vendor = 'Apple';
    } else if (/Linux/i.test(ua)) {
      vendor = 'Linux';
    }

    if (/Chrome/i.test(ua)) {
      browserName = 'Chrome';
    } else if (/Firefox/i.test(ua)) {
      browserName = 'Firefox';
    } else if (/Safari/i.test(ua)) {
      browserName = 'Safari';
    } else if (/Edge/i.test(ua)) {
      browserName = 'Edge';
    } else if (/Opera|OPR/i.test(ua)) {
      browserName = 'Opera';
    } else if (/MSIE|Trident/i.test(ua)) {
      browserName = 'Internet Explorer';
    }

    return {
      deviceType,
      vendor,
      browserName
    };
  };

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-gradient-to-br from-orange-50 to-red-50 p-4">
        <div className="text-center">
          <div className="relative">
            <div className="h-12 w-12 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin mx-auto md:h-16 md:w-16"></div>
            <Pizza className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-4 w-4 text-orange-500 md:h-6 md:w-6" />
          </div>
          <p className="mt-3 text-orange-700 font-medium text-sm md:text-base">Loading  menu...</p>
        </div>
      </div>
    )
  }

  if (error || !menu) {
    return (
      <div className="flex h-screen items-center justify-center bg-gradient-to-br from-red-50 to-orange-50 p-4">
        <Card className="w-full max-w-sm border-red-200 md:max-w-md">
          <CardHeader className="text-center">
            <div className="mx-auto mb-3 h-12 w-12 bg-red-100 rounded-full flex items-center justify-center md:mb-4 md:h-16 md:w-16">
              <QrCode className="h-6 w-6 text-red-500 md:h-8 md:w-8" />
            </div>
            <CardTitle className="text-red-600 text-lg md:text-xl">Menu Not Found</CardTitle>
            <CardDescription className="text-gray-600 text-sm md:text-base">
              {error || "The requested menu could not be found. Please check the URL or try again later."}
            </CardDescription>
            <div className="mt-4">
              <Link 
                href="/"
                className="inline-flex items-center px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-colors"
              >
                Go Home
              </Link>
            </div>
          </CardHeader>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-orange-100 to-red-100">
        <div className="absolute inset-0">
          <div className="absolute top-4 left-4 w-16 h-16 bg-orange-200 rounded-full opacity-30 animate-pulse"></div>
          <div className="absolute top-20 right-8 w-12 h-12 bg-red-200 rounded-full opacity-20 animate-bounce"></div>
          <div className="absolute bottom-8 left-1/3 w-10 h-10 bg-pink-200 rounded-full opacity-25 animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-6 max-w-4xl">
          {/* Restaurant Info Card */}
          <div className="bg-white rounded-3xl shadow-xl border border-orange-200 p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              {/* Left Column - Logo & Name */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Image
                    src="/logo.png"
                    alt="Restaurant Logo"
                    width={70}
                    height={70}
                    className="h-16 w-16 rounded-2xl shadow-lg border-2 border-orange-200"
                  />
                  <div className="absolute -top-1 -right-1 h-5 w-5 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
                </div>
                
                <div className="flex-1">
                  <h1 className="text-2xl font-bold text-gray-800 mb-2 leading-tight">
                    {menu.name}
                  </h1>
                  
                  <div className="flex items-center gap-2 text-gray-600 mb-3">
                    <Phone className="h-4 w-4" />
                    <span className="text-sm font-medium">+{menu.whatsappNumber}</span>
                  </div>
                  
                  {/* Status */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setRatingDialogOpen(true)}
                      className="flex items-center gap-1 bg-yellow-100 hover:bg-yellow-200 text-yellow-700 rounded-full px-3 py-1 transition-colors cursor-pointer"
                    >
                      <Star className="h-3 w-3 fill-current" />
                      <span className="text-xs font-semibold">
                        {totalRatings > 0 ? averageRating.toFixed(1) : "Rate us"}
                      </span>
                    </button>
                    <div className="flex items-center gap-1 bg-green-100 text-green-700 rounded-full px-3 py-1">
                      <Clock className="h-3 w-3" />
                      <span className="text-xs font-semibold">Open</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Column - Address/Description */}
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-4 border border-orange-100">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-sm font-semibold text-gray-700 mb-2">Address</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {menu.description || "Address information not available"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="container mx-auto px-3 py-4 max-w-4xl md:px-4 md:py-6">
        {/* Search Bar */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 md:h-5 md:w-5" />
          <input
            type="text"
            placeholder="Search for dishes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-orange-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-black bg-white shadow-sm md:py-4"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="h-4 w-4 text-gray-400" />
            </button>
          )}
        </div>

        {/* Filter Toggle and Active Filters */}
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-2 bg-orange-100 hover:bg-orange-200 text-orange-700 rounded-lg transition-colors md:px-6"
          >
            <Filter className="h-4 w-4 md:h-5 md:w-5" />
            <span className="text-sm font-medium md:text-base">Categories</span>
          </button>

          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="flex items-center gap-1 px-3 py-1 text-sm text-red-600 hover:text-red-700 transition-colors"
            >
              <X className="h-3 w-3" />
              Clear filters
            </button>
          )}
        </div>

        {/* Category Filter Chips */}
        {showFilters && (
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  !selectedCategory
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Items
              </button>
              {menu.categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.name
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Active Filter Tags */}
        {hasActiveFilters && (
          <div className="flex flex-wrap gap-2 mb-4">
            {searchTerm && (
              <div className="flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                <Search className="h-3 w-3" />
                "{searchTerm}"
                <button onClick={() => setSearchTerm("")} className="ml-1 hover:bg-blue-200 rounded-full p-0.5">
                  <X className="h-3 w-3" />
                </button>
              </div>
            )}
            {selectedCategory && (
              <div className="flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                <Filter className="h-3 w-3" />
                {selectedCategory}
                <button onClick={() => setSelectedCategory(null)} className="ml-1 hover:bg-green-200 rounded-full p-0.5">
                  <X className="h-3 w-3" />
                </button>
              </div>
            )}
          </div>
        )}

        {/* Results Count */}
        {hasActiveFilters && (
          <div className="text-sm text-gray-600 mb-4">
            {filteredCategories.reduce((total, category) => total + category.items.length, 0)} item(s) found
          </div>
        )}
      </div>

      {/* Menu Content */}
      <div className="container mx-auto px-3 py-6 max-w-4xl md:px-4 md:py-8">
        {filteredCategories.length > 0 ? (
          filteredCategories.map((category, index) => (
          <div key={index} className="mb-8 md:mb-16">
            {/* Category Header */}
            <div className="text-center tracking-normal mb-6 md:mb-12">
              <h2 className="text-xl  font-black text-black mb-2 md:text-4xl md:mb-4">
                { category.name}
              </h2>
              <div className="flex items-center justify-center gap-2">
                <div className="h-1 w-10 bg-gradient-to-r from-orange-400 to-red-400 rounded-full md:w-16"></div>
                <Pizza className="h-3 w-3 text-orange-500 md:h-6 md:w-6" />
                <div className="h-1 w-10 bg-gradient-to-r from-red-400 to-pink-400 rounded-full md:w-16"></div>
              </div>
            </div>

            {/* Menu Items */}
            <div className="grid gap-3 md:gap-6">
              {category.items.map((item, itemIndex) => (
                <Card key={itemIndex} className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden bg-white hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50">
                  <CardContent className="p-0">
                    {/* Mobile-first layout: Image on top, details below */}
                    <div className="flex flex-col">
                      {/* Item Image */}
                      <div className="relative h-32 bg-gradient-to-br from-orange-200 to-red-200 flex items-center justify-center overflow-hidden md:h-48 md:w-48 md:flex-shrink-0">
                        {item?.image ? (
                          <Image
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                            width={30}
                            height={10}
                          />
                        ) : (
                          <Image
                            src="/logo.png"
                            alt=" Image"
                            className="w-24 h-24 text-gray-400 opacity-50 md:w-16 md:h-16"
                            width={50}
                            height={20}
                          />
                        )}
                        
                        {/* Favorite Button */}
                        <button
                          onClick={() => toggleFavorite(item.name)}
                          className="absolute top-2 right-2 p-1 rounded-full bg-white bg-opacity-80 hover:bg-opacity-100 transition-all duration-200 hover:scale-110 md:top-4 md:right-4 md:p-2"
                        >
                          <Heart
                            className={`h-3 w-3 transition-colors md:h-5 md:w-5 ${
                              favorites.has(item.name)
                                ? 'text-red-500 fill-current'
                                : 'text-gray-400 hover:text-red-500'
                            }`}
                          />
                        </button>
                      </div>

                      {/* Item Details */}
                      <div className="p-3 md:flex-1 md:p-6 md:p-8">
                        <div className="space-y-3 md:space-y-4">
                          {/* Item Info */}
                          <div>
                            <h3 className="text-base font-bold text-gray-800 mb-1 group-hover:text-orange-600 transition-colors md:text-2xl md:mb-3">
                              {item.name}
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-sm md:text-lg">
                              {item.description}
                            </p>
                          </div>
                          
                          {/* Price and Controls */}
                          <div className="flex items-center justify-between">
                            {/* Price */}
                            <div>
                              <div className="text-lg font-black text-green-600 md:text-3xl">
                                ₹{item.price.toFixed(2)}
                              </div>
                              <div className="text-xs text-gray-500 md:text-sm">per plate</div>
                            </div>

                            {/* Add to Cart / Quantity Controls */}
                            {!cart[item.name] ? (
                              <button
                                className={`flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-full font-bold text-xs shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 md:gap-2 md:px-6 md:py-3 md:text-lg ${
                                  totalItems >= 4 ? 'opacity-50 cursor-not-allowed' : ''
                                }`}
                                onClick={() => handleAddToCart(item)}
                                disabled={totalItems >= 4}
                              >
                                <ShoppingCart className="h-3 w-3 md:h-5 md:w-5" />
                                <span className="hidden sm:inline">Add to Cart</span>
                                <span className="sm:hidden">Add</span>
                              </button>
                            ) : (
                              <div className="flex items-center gap-1 p-1.5 bg-gradient-to-r from-orange-100 to-red-100 rounded-lg border border-orange-200 md:gap-4 md:p-4 md:rounded-2xl">
                                <button
                                  className="w-6 h-6 flex items-center justify-center bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-full font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 md:w-12 md:h-12 md:text-xl"
                                  onClick={() => handleDecrement(item)}
                                  aria-label="Decrease quantity"
                                >
                                  −
                                </button>
                                
                                <div className="text-center min-w-[40px] md:min-w-[80px]">
                                  <div className="text-sm font-black text-orange-700 md:text-2xl">
                                    {cart[item.name].quantity}
                                  </div>
                                  <div className="text-xs text-orange-600 font-medium md:text-sm">
                                    {cart[item.name].quantity === 1 ? 'item' : 'items'}
                                  </div>
                                </div>
                                
                                <button
                                  className={`w-6 h-6 flex items-center justify-center bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-full font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 md:w-12 md:h-12 md:text-xl ${
                                    totalItems >= 4 ? 'opacity-50 cursor-not-allowed' : ''
                                  }`}
                                  onClick={() => handleIncrement(item)}
                                  aria-label="Increase quantity"
                                  disabled={totalItems >= 4}
                                >
                                  +
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Category Separator */}
            {index < menu.categories.length - 1 && (
              <div className="flex justify-center my-6 md:my-16">
                <div className="flex items-center gap-2 md:gap-4">
                  <div className="h-px w-12 bg-gradient-to-r from-transparent via-orange-300 to-transparent md:w-24"></div>
                  <div className="h-2 w-2 bg-gradient-to-r from-orange-400 to-red-400 rounded-full animate-pulse md:h-4 md:w-4"></div>
                  <div className="h-px w-12 bg-gradient-to-r from-transparent via-red-300 to-transparent md:w-24"></div>
                </div>
              </div>
            )}
          </div>
        ))
        ) : hasActiveFilters ? (
          /* No Results Message */
          <div className="text-center py-12">
            <div className="mx-auto mb-4 h-16 w-16 bg-gray-100 rounded-full flex items-center justify-center">
              <Search className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">No items found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search or filters</p>
            <button
              onClick={clearFilters}
              className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-colors"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          /* No categories message */
          <div className="text-center py-12">
            <div className="mx-auto mb-4 h-16 w-16 bg-gray-100 rounded-full flex items-center justify-center">
              <Pizza className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">No menu items available</h3>
            <p className="text-gray-600">Please check back later</p>
          </div>
        )}
      </div>

      {/* Floating Cart */}
      {totalAmount > 0 && (
        <div className="fixed bottom-3 left-3 right-3 z-50 md:bottom-6 md:left-1/2 md:right-auto md:transform md:-translate-x-1/2 md:max-w-md">
          <div className="bg-white rounded-xl shadow-2xl border border-orange-200 p-3 backdrop-blur-sm bg-opacity-95 md:rounded-2xl md:p-4">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 md:gap-3">
                <div className="relative">
                  <ShoppingCart className="h-5 w-5 text-orange-600 md:h-6 md:w-6" />
                  <div className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold md:-top-2 md:-right-2 md:h-5 md:w-5">
                    {totalItems}
                  </div>
                </div>
                <div>
                  <div className="font-bold text-gray-800 text-sm md:text-base">₹{totalAmount.toFixed(2)}</div>
                  <div className="text-xs text-gray-500 md:text-sm">{totalItems} items</div>
                </div>
              </div>
              
              {menu?.whatsappNumber ? (
                <button
                  className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-lg font-bold text-xs shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 flex items-center gap-1 md:px-6 md:py-2 md:rounded-xl md:text-sm md:gap-2"
                  onClick={handlePlaceOrder}
                  disabled={placingOrder}
                >
                  {placingOrder ? (
                    <>
                      <div className="h-3 w-3 border-2 border-white border-t-transparent rounded-full animate-spin md:h-4 md:w-4"></div>
                      <span className="hidden sm:inline">Ordering...</span>
                    </>
                  ) : (
                    <>
                      <Phone className="h-3 w-3 md:h-4 md:w-4" />
                      <span className="hidden sm:inline">Order Now</span>
                      <span className="sm:hidden">Order</span>
                    </>
                  )}
                </button>
              ) : (
                <div className="text-xs text-red-500 font-medium md:text-sm">
                  WhatsApp unavailable
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Order Dialog */}
      <Dialog open={orderDialogOpen} onOpenChange={setOrderDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Place Your Order</DialogTitle>
            <DialogDescription>
              Please provide your details to complete the order.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="Enter your name"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="mobile" className="text-right">
                Mobile
              </Label>
              <Input
                id="mobile"
                type="tel"
                value={customerMobile}
                onChange={(e) => setCustomerMobile(e.target.value)}
                placeholder="Enter mobile number"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="roomTable" className="text-right">
                Room/Table
              </Label>
              <Input
                id="roomTable"
                value={roomTableNumber}
                onChange={(e) => setRoomTableNumber(e.target.value)}
                placeholder="Room or Table number"
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <button
              onClick={() => setOrderDialogOpen(false)}
              className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg font-medium transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmitOrder}
              disabled={placingOrder || !customerName || !customerMobile || !roomTableNumber}
              className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {placingOrder ? 'Placing Order...' : 'Place Order'}
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Rating Dialog */}
      <Dialog open={ratingDialogOpen} onOpenChange={setRatingDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Rate Our Restaurant</DialogTitle>
            <DialogDescription>
              Share your feedback by rating us and providing your details.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="rating-name" className="text-right">
                Name
              </Label>
              <Input
                id="rating-name"
                value={ratingCustomerName}
                onChange={(e) => setRatingCustomerName(e.target.value)}
                placeholder="Enter your name"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="rating-mobile" className="text-right">
                Mobile
              </Label>
              <Input
                id="rating-mobile"
                type="tel"
                value={ratingCustomerMobile}
                onChange={(e) => setRatingCustomerMobile(e.target.value)}
                placeholder="Enter mobile number"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">
                Rating
              </Label>
              <div className="col-span-3 flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setRatingValue(star)}
                    className={`p-1 rounded-full transition-colors ${
                      star <= ratingValue ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                  >
                    <Star className="h-6 w-6 fill-current" />
                  </button>
                ))}
              </div>
            </div>
          </div>
          <DialogFooter>
            <button
              onClick={() => setRatingDialogOpen(false)}
              className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg font-medium transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmitRating}
              disabled={submittingRating || !ratingCustomerName || !ratingCustomerMobile || ratingValue === 0}
              className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submittingRating ? 'Submitting...' : 'Submit Rating'}
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <div className="mt-12 pb-6 md:mt-10 md:pb-4">
        <div className="text-center px-4">
          <div className="text-gray-500 text-xs md:text-sm">
            Powered by{' '}
            <Link
              href="https://www.procotech.in"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-orange-600 hover:text-orange-700 transition-colors"
            >
              Proco Technologies
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}