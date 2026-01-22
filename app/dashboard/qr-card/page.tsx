"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { Download, Copy, Trash2, Plus } from "lucide-react"
import { auth, db, collection, query, where, safeGetDocs, safeAddDoc, serverTimestamp, doc } from "@/lib/firebase"
import { deleteDoc } from "firebase/firestore"
import QRCode from "qrcode"
import Link from "next/link"

interface QRCard {
  id: string
  name: string
  businessName: string
  mobileNumber: string
  businessDetails: string
  qrCodeUrl: string
  cardPreviewUrl: string
  createdAt: any
}

export default function DashboardQRCardPage() {
  const router = useRouter()
  const [qrCards, setQRCards] = useState<QRCard[]>([])
  const [selectedCard, setSelectedCard] = useState<QRCard | null>(null)
  const [loading, setLoading] = useState(true)
  const [name, setName] = useState("")
  const [businessName, setBusinessName] = useState("")
  const [mobileNumber, setMobileNumber] = useState("")
  const [businessDetails, setBusinessDetails] = useState("")
  const [qrCodeUrl, setQrCodeUrl] = useState("")
  const [cardPreviewUrl, setCardPreviewUrl] = useState("")
  const [generating, setGenerating] = useState(false)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    fetchQRCards()
  }, [])

  const fetchQRCards = async () => {
    try {
      const user = auth.currentUser
      if (!user) {
        router.push("/login")
        return
      }

      const q = query(
        collection(db, "qr_cards"),
        where("createdBy", "==", user.uid)
      )
      const snapshot = await safeGetDocs(q)
      const cards: QRCard[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      } as QRCard))
      
      setQRCards(cards)
      if (cards.length > 0) {
        setSelectedCard(cards[0])
        loadCardData(cards[0])
      }
    } catch (error) {
      console.error("Error fetching QR cards:", error)
      toast({
        title: "Error",
        description: "Failed to load QR cards",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const loadCardData = (card: QRCard) => {
    setName(card.name)
    setBusinessName(card.businessName)
    setMobileNumber(card.mobileNumber)
    setBusinessDetails(card.businessDetails)
    setQrCodeUrl(card.qrCodeUrl)
    setCardPreviewUrl(card.cardPreviewUrl)
  }

  const handleSelectCard = (card: QRCard) => {
    setSelectedCard(card)
    loadCardData(card)
  }

  const generateQRCode = async () => {
    if (!name.trim() || !businessName.trim() || !mobileNumber.trim()) {
      toast({
        title: "Missing Information",
        description: "Please fill in name, business name, and mobile number",
        variant: "destructive",
      })
      return
    }

    setGenerating(true)

    try {
      const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:${name}
ORG:${businessName}
TEL:${mobileNumber}
NOTE:${businessDetails}
END:VCARD`

      const dataUrl = await QRCode.toDataURL(vCardData, {
        width: 300,
        margin: 2,
        color: {
          dark: "#000000",
          light: "#ffffff",
        },
      })

      setQrCodeUrl(dataUrl)

      // Generate card preview
      generateCardPreview(dataUrl)
    } catch (error) {
      console.error("Error generating QR code:", error)
      toast({
        title: "Error",
        description: "Failed to generate QR code",
        variant: "destructive",
      })
    } finally {
      setGenerating(false)
    }
  }

  const generateCardPreview = async (qrUrl: string) => {
    try {
      const canvas = document.createElement("canvas")
      canvas.width = 600
      canvas.height = 400

      const ctx = canvas.getContext("2d")
      if (!ctx) return

      ctx.fillStyle = "#ffffff"
      ctx.fillRect(0, 0, 600, 400)

      ctx.strokeStyle = "#f97316"
      ctx.lineWidth = 3
      ctx.strokeRect(10, 10, 580, 380)

      ctx.fillStyle = "#1f2937"
      ctx.font = "bold 24px Arial"
      ctx.fillText(name, 30, 60)

      ctx.fillStyle = "#f97316"
      ctx.font = "16px Arial"
      ctx.fillText(businessName, 30, 90)

      ctx.fillStyle = "#6b7280"
      ctx.font = "14px Arial"
      ctx.fillText(`Phone: ${mobileNumber}`, 30, 120)

      if (businessDetails) {
        ctx.fillStyle = "#6b7280"
        ctx.font = "12px Arial"
        const lines = businessDetails.split("\n")
        let yOffset = 150
        lines.forEach((line) => {
          ctx.fillText(line.substring(0, 40), 30, yOffset)
          yOffset += 20
        })
      }

      const qrImage = new Image()
      qrImage.src = qrUrl
      await new Promise((resolve) => {
        qrImage.onload = () => {
          ctx.drawImage(qrImage, 380, 80, 180, 180)
          resolve(null)
        }
      })

      ctx.fillStyle = "#6b7280"
      ctx.font = "12px Arial"
      ctx.textAlign = "center"
      ctx.fillText("Scan to Contact", 470, 290)
      ctx.textAlign = "left"

      const previewUrl = canvas.toDataURL()
      setCardPreviewUrl(previewUrl)
    } catch (error) {
      console.error("Error generating card preview:", error)
    }
  }

  const saveQRCard = async () => {
    if (!qrCodeUrl) {
      toast({
        title: "Error",
        description: "Please generate QR code first",
        variant: "destructive",
      })
      return
    }

    setSaving(true)

    try {
      const user = auth.currentUser
      if (!user) return

      const cardData = {
        name,
        businessName,
        mobileNumber,
        businessDetails,
        qrCodeUrl,
        cardPreviewUrl,
        createdBy: user.uid,
        createdByEmail: user.email,
        timestamp: serverTimestamp(),
      }

      await safeAddDoc(collection(db, "qr_cards"), cardData)

      toast({
        title: "Success",
        description: "QR card saved successfully",
      })

      // Refresh the list
      await fetchQRCards()
    } catch (error) {
      console.error("Error saving QR card:", error)
      toast({
        title: "Error",
        description: "Failed to save QR card",
        variant: "destructive",
      })
    } finally {
      setSaving(false)
    }
  }

  const deleteQRCard = async (cardId: string) => {
    try {
      await deleteDoc(doc(db, "qr_cards", cardId))
      toast({
        title: "Success",
        description: "QR card deleted",
      })
      await fetchQRCards()
    } catch (error) {
      console.error("Error deleting QR card:", error)
      toast({
        title: "Error",
        description: "Failed to delete QR card",
        variant: "destructive",
      })
    }
  }

  const downloadCard = async () => {
    if (!cardPreviewUrl) return

    try {
      const link = document.createElement("a")
      link.href = cardPreviewUrl
      link.download = `${businessName}-visiting-card.png`
      link.click()
    } catch (error) {
      console.error("Error downloading:", error)
      toast({
        title: "Error",
        description: "Failed to download card",
        variant: "destructive",
      })
    }
  }

  const copyQRCode = async () => {
    if (!qrCodeUrl) return

    try {
      const blob = await (await fetch(qrCodeUrl)).blob()
      await navigator.clipboard.write([
        new ClipboardItem({ "image/png": blob }),
      ])
      toast({
        title: "Copied",
        description: "QR code copied to clipboard",
      })
    } catch (error) {
      console.error("Error copying:", error)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-center">
          <div className="h-8 w-8 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-orange-600">Loading QR Cards...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex-1 space-y-6 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-orange-600">QR Cards</h2>
          <p className="text-orange-600/80">Manage your digital visiting cards</p>
        </div>
        <Button className="bg-orange-500 hover:bg-orange-600 gap-2" onClick={saveQRCard} disabled={saving}>
          <Plus className="h-4 w-4" />
          {saving ? "Saving..." : "Save New Card"}
        </Button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Left - Cards List */}
        <div className="md:col-span-1">
          <Card className="border-orange-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-orange-600">Your QR Cards</CardTitle>
              <CardDescription>
                {qrCards.length} card{qrCards.length !== 1 ? "s" : ""} saved
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {qrCards.length === 0 ? (
                <p className="text-sm text-gray-500">No QR cards yet. Create one!</p>
              ) : (
                qrCards.map((card) => (
                  <div
                    key={card.id}
                    className={`p-3 rounded-lg border-2 cursor-pointer transition-colors ${
                      selectedCard?.id === card.id
                        ? "border-orange-500 bg-orange-50"
                        : "border-orange-100 hover:border-orange-300"
                    }`}
                    onClick={() => handleSelectCard(card)}
                  >
                    <p className="font-semibold text-sm text-gray-800">{card.name}</p>
                    <p className="text-xs text-orange-600">{card.businessName}</p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        deleteQRCard(card.id)
                      }}
                      className="mt-2 text-red-500 hover:text-red-700 text-xs flex items-center gap-1"
                    >
                      <Trash2 className="h-3 w-3" />
                      Delete
                    </button>
                  </div>
                ))
              )}
            </CardContent>
          </Card>
        </div>

        {/* Right - Form and Preview */}
        <div className="md:col-span-2 space-y-6">
          {/* Form */}
          <Card className="border-orange-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-orange-600">Card Details</CardTitle>
              <CardDescription>Create or edit your visiting card</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-medium">
                    Your Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border-orange-200"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="businessName" className="font-medium">
                    Business Name
                  </Label>
                  <Input
                    id="businessName"
                    placeholder="Enter your business name"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    className="border-orange-200"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mobileNumber" className="font-medium">
                    Mobile Number
                  </Label>
                  <Input
                    id="mobileNumber"
                    type="tel"
                    placeholder="Enter your mobile number"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    className="border-orange-200"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="businessDetails" className="font-medium">
                  Business Details
                </Label>
                <Textarea
                  id="businessDetails"
                  placeholder="Enter business details (address, website, etc.)"
                  value={businessDetails}
                  onChange={(e) => setBusinessDetails(e.target.value)}
                  className="border-orange-200 min-h-24"
                />
              </div>

              <Button
                onClick={generateQRCode}
                className="w-full bg-orange-500 hover:bg-orange-600"
                disabled={generating}
              >
                {generating ? "Generating..." : "Generate QR Code"}
              </Button>
            </CardContent>
          </Card>

          {/* Preview */}
          {qrCodeUrl && cardPreviewUrl && (
            <Card className="border-orange-200 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg text-orange-600">Preview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-white p-4 rounded-lg border-2 border-orange-100">
                  <img
                    src={cardPreviewUrl}
                    alt="Card Preview"
                    className="w-full h-auto rounded"
                  />
                </div>

                <div className="flex gap-2">
                  <Button
                    onClick={copyQRCode}
                    variant="outline"
                    className="flex-1 gap-2 border-orange-200"
                  >
                    <Copy className="h-4 w-4" />
                    Copy QR
                  </Button>
                  <Button
                    onClick={downloadCard}
                    className="flex-1 gap-2 bg-orange-500 hover:bg-orange-600"
                  >
                    <Download className="h-4 w-4" />
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
