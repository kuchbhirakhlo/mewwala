"use client"

import { useEffect, useState } from "react"

// Force dynamic rendering
export const dynamic = 'force-dynamic'
import { db, auth, safeOnAuthStateChanged } from "@/lib/firebase"
import { collection, query, where, safeGetDocs, orderBy } from "@/lib/firebase"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Users, TrendingUp } from "lucide-react"
import type { User } from "firebase/auth"

interface Rating {
  id: string
  restaurantId: string
  customerName: string
  customerMobile: string
  rating: number
  timestamp: Date
}

export default function RatingsPage() {
  const [user, setUser] = useState<User | null>(null)
  const [ratings, setRatings] = useState<Rating[]>([])
  const [loading, setLoading] = useState(true)
  const [stats, setStats] = useState({
    totalRatings: 0,
    averageRating: 0,
    ratingDistribution: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }
  })

  useEffect(() => {
    const unsubscribe = safeOnAuthStateChanged(auth, (user) => {
      setUser(user)
    })

    return () => unsubscribe()
  }, [])

  useEffect(() => {
    const fetchRatings = async () => {
      if (!user) return

      try {
        const ratingsQuery = query(
          collection(db, "ratings"),
          where("restaurantId", "==", user.uid),
          orderBy("timestamp", "desc")
        )
        const ratingsSnapshot = await safeGetDocs(ratingsQuery)

        const ratingsData: Rating[] = ratingsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          timestamp: doc.data().timestamp?.toDate() || new Date()
        })) as Rating[]

        setRatings(ratingsData)

        // Calculate stats
        const totalRatings = ratingsData.length
        const averageRating = totalRatings > 0
          ? ratingsData.reduce((sum, r) => sum + r.rating, 0) / totalRatings
          : 0

        const distribution = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }
        ratingsData.forEach(r => {
          distribution[r.rating as keyof typeof distribution]++
        })

        setStats({
          totalRatings,
          averageRating,
          ratingDistribution: distribution
        })
      } catch (error) {
        console.error("Error fetching ratings:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchRatings()
  }, [user])

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-center">
          <div className="h-12 w-12 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin mx-auto"></div>
          <p className="mt-3 text-orange-700 font-medium">Loading ratings...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Customer Ratings</h1>
        <p className="text-gray-600">View and manage customer feedback for your restaurant</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Ratings</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalRatings}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.averageRating.toFixed(1)}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Rating Trend</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">+12%</div>
            <p className="text-xs text-muted-foreground">from last month</p>
          </CardContent>
        </Card>
      </div>

      {/* Rating Distribution */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Rating Distribution</CardTitle>
          <CardDescription>Breakdown of ratings by star count</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map((star) => (
              <div key={star} className="flex items-center gap-4">
                <div className="flex items-center gap-1 w-16">
                  <span className="text-sm font-medium">{star}</span>
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                </div>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-yellow-400 h-2 rounded-full"
                    style={{
                      width: stats.totalRatings > 0 ? `${(stats.ratingDistribution[star as keyof typeof stats.ratingDistribution] / stats.totalRatings) * 100}%` : '0%'
                    }}
                  ></div>
                </div>
                <span className="text-sm text-gray-600 w-8">{stats.ratingDistribution[star as keyof typeof stats.ratingDistribution]}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Ratings List */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Ratings</CardTitle>
          <CardDescription>All customer ratings and feedback</CardDescription>
        </CardHeader>
        <CardContent>
          {ratings.length === 0 ? (
            <div className="text-center py-8">
              <Star className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">No ratings yet</p>
              <p className="text-sm text-gray-400">Ratings will appear here once customers start rating your restaurant</p>
            </div>
          ) : (
            <div className="space-y-4">
              {ratings.map((rating) => (
                <div key={rating.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-5 w-5 ${
                            star <= rating.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{rating.customerName}</p>
                      <p className="text-sm text-gray-600">{rating.customerMobile}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">
                      {rating.timestamp.toLocaleDateString()} {rating.timestamp.toLocaleTimeString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}