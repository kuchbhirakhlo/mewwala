"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { collection, query, where, getDocs, orderBy, updateDoc, doc } from "@/lib/firebase"
import { db, auth } from "@/lib/firebase"
import { toast } from "@/components/ui/use-toast"
import { ShoppingCart, Clock, CheckCircle, XCircle, Phone, MapPin } from "lucide-react"

interface OrderItem {
  name: string
  quantity: number
  price: number
}

interface Order {
  id: string
  restaurantId: string
  customerName: string
  customerMobile: string
  roomTableNumber: string
  items: OrderItem[]
  total: number
  timestamp: Date
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled'
}

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<string>("all")

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const user = auth.currentUser
        if (!user) return

        const q = query(
          collection(db, "orders"),
          where("restaurantId", "==", user.uid),
          orderBy("timestamp", "desc")
        )
        const querySnapshot = await getDocs(q)

        const ordersList: Order[] = []
        querySnapshot.forEach((doc) => {
          const data = doc.data()
          ordersList.push({
            id: doc.id,
            restaurantId: data.restaurantId,
            customerName: data.customerName,
            customerMobile: data.customerMobile,
            roomTableNumber: data.roomTableNumber,
            items: data.items,
            total: data.total,
            timestamp: data.timestamp.toDate(),
            status: data.status || 'pending'
          })
        })

        setOrders(ordersList)
      } catch (error) {
        console.error("Error fetching orders:", error)
        toast({
          title: "Error",
          description: "Failed to load orders",
          variant: "destructive",
        })
      } finally {
        setLoading(false)
      }
    }

    fetchOrders()
  }, [])

  const updateOrderStatus = async (orderId: string, newStatus: Order['status']) => {
    try {
      await updateDoc(doc(db, "orders", orderId), {
        status: newStatus
      })

      setOrders(prev => prev.map(order =>
        order.id === orderId ? { ...order, status: newStatus } : order
      ))

      toast({
        title: "Status updated",
        description: `Order status changed to ${newStatus}`,
      })
    } catch (error) {
      console.error("Error updating order status:", error)
      toast({
        title: "Error",
        description: "Failed to update order status",
        variant: "destructive",
      })
    }
  }

  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800'
      case 'confirmed': return 'bg-blue-100 text-blue-800'
      case 'completed': return 'bg-green-100 text-green-800'
      case 'cancelled': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusIcon = (status: Order['status']) => {
    switch (status) {
      case 'pending': return <Clock className="h-3 w-3" />
      case 'confirmed': return <CheckCircle className="h-3 w-3" />
      case 'completed': return <CheckCircle className="h-3 w-3" />
      case 'cancelled': return <XCircle className="h-3 w-3" />
      default: return <Clock className="h-3 w-3" />
    }
  }

  const filteredOrders = orders.filter(order => {
    if (filter === "all") return true
    return order.status === filter
  })

  if (loading) {
    return (
      <div className="container py-8">
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading orders...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <h1 className="text-3xl font-bold text-orange-600">Orders</h1>
        <div className="w-full md:w-48">
          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger>
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Orders</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="confirmed">Confirmed</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="cancelled">Cancelled</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {filteredOrders.length === 0 ? (
        <Card className="border-orange-200">
          <CardContent className="flex flex-col items-center justify-center py-12">
            <ShoppingCart className="h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-semibold text-gray-600 mb-2">No orders found</h3>
            <p className="text-gray-500 text-center">
              {filter === "all"
                ? "You haven't received any orders yet."
                : `No ${filter} orders found.`
              }
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-6">
          {filteredOrders.map((order) => (
            <Card key={order.id} className="border-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader className="bg-gradient-to-r from-orange-50 to-white">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-lg text-gray-800">{order.customerName}</CardTitle>
                    <CardDescription className="flex items-center gap-4 mt-2">
                      <span className="flex items-center gap-1">
                        <Phone className="h-4 w-4" />
                        {order.customerMobile}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {order.roomTableNumber}
                      </span>
                    </CardDescription>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <Badge className={`${getStatusColor(order.status)} flex items-center gap-1`}>
                      {getStatusIcon(order.status)}
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </Badge>
                    <span className="text-sm text-gray-500">
                      {order.timestamp.toLocaleString()}
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Order Items:</h4>
                    <div className="space-y-1">
                      {order.items.map((item, index) => (
                        <div key={index} className="flex justify-between text-sm">
                          <span>{item.name} x{item.quantity}</span>
                          <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="border-t pt-3 flex justify-between items-center">
                    <span className="font-semibold text-gray-800">Total:</span>
                    <span className="font-bold text-lg text-green-600">₹{order.total.toFixed(2)}</span>
                  </div>
                  <div className="flex gap-2 pt-2">
                    {order.status === 'pending' && (
                      <>
                        <Button
                          size="sm"
                          onClick={() => updateOrderStatus(order.id, 'confirmed')}
                          className="bg-blue-500 hover:bg-blue-600"
                        >
                          Confirm
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => updateOrderStatus(order.id, 'cancelled')}
                          className="border-red-300 text-red-600 hover:bg-red-50"
                        >
                          Cancel
                        </Button>
                      </>
                    )}
                    {order.status === 'confirmed' && (
                      <Button
                        size="sm"
                        onClick={() => updateOrderStatus(order.id, 'completed')}
                        className="bg-green-500 hover:bg-green-600"
                      >
                        Mark Complete
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}