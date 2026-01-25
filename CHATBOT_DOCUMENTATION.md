# ProcoAI Chatbot Documentation

## Overview
ProcoAI is an intelligent chatbot assistant for your Menu Wala portal. It appears as a floating widget in the bottom-right corner of your homepage and provides instant answers to common questions about your digital menu platform.

## Features
✨ **Key Features:**
- 💬 Natural language conversation
- 🤖 Intelligent response system
- 📱 Mobile-responsive design
- 🎨 Beautiful UI with gradient styling
- ⚡ Fast response time (simulated thinking delay)
- 💾 Conversation history
- 🎯 Suggested questions for first-time users
- 🔄 Real-time message scrolling

## Files Created

### 1. `/lib/chatbot-data.ts`
Contains the knowledge base for the chatbot:
- Portal information (about, features, pricing)
- Setup instructions
- FAQ responses
- Greeting messages
- Suggested questions
- Response patterns for matching user queries

### 2. `/lib/chatbot-utils.ts`
Utility functions for chatbot functionality:
- `generateMessageId()` - Creates unique message IDs
- `extractKeywords()` - Extracts keywords from user input
- `findMatchingCategory()` - Matches user queries to response categories
- `generateBotResponse()` - Generates contextual bot responses
- `formatBotMessage()` - Converts markdown-like formatting to HTML

### 3. `/components/proco-ai.tsx`
Main chatbot component:
- Floating button in bottom-right corner
- Full chat interface with message history
- Input field with send button
- Suggested questions panel
- Loading animation
- Smooth animations and transitions

## Installation

The chatbot is already integrated into your homepage! Here's what was done:

1. ✅ Created chatbot data and utility files
2. ✅ Built the ProcoAI component
3. ✅ Imported ProcoAI in your homepage (`app/page.tsx`)
4. ✅ Added it to the main layout

## Usage

The chatbot appears automatically on your homepage:
- **Floating Button**: Orange gradient button in bottom-right corner
- **Click to Open**: Opens a full chat interface
- **Ask Questions**: Users can type or select suggested questions
- **Instant Responses**: Get immediate answers about your portal

## Supported Topics

ProcoAI can answer questions about:
- 🍽️ Menu Wala features and capabilities
- 💰 Pricing and plans
- 🚀 Getting started and setup
- 📱 QR code functionality
- 💬 WhatsApp order integration
- 🔒 Security and privacy
- 📞 Support and contact information
- 🎉 Free trial availability

## Customization

### Adding New Knowledge
Edit `/lib/chatbot-data.ts` to add:
1. New topics to `CHATBOT_KNOWLEDGE_BASE`
2. New response patterns to `RESPONSE_PATTERNS`
3. New suggested questions to `SUGGESTED_QUESTIONS`

### Styling
The chatbot uses Tailwind CSS and Radix UI components. Modify colors in `/components/proco-ai.tsx`:
- **Orange gradient**: `from-orange-500 to-amber-500`
- **User messages**: Orange themed
- **Bot messages**: Gray themed

### Response Generation
Customize responses in `generateBotResponse()` function in `/lib/chatbot-utils.ts`

## Example Interactions

**User:** "What is Menu Wala?"
**ProcoAI:** Provides detailed description of the platform

**User:** "How much does it cost?"
**ProcoAI:** Lists pricing plans and mentions free trial

**User:** "How do I create a menu?"
**ProcoAI:** Provides step-by-step setup instructions

**User:** "Is my data secure?"
**ProcoAI:** Explains security features

## Message Format Support

ProcoAI supports markdown-like formatting:
- `**text**` → Bold
- `*text*` → Italic
- `[text](url)` → Links
- Line breaks automatically converted

## Browser Compatibility
- Works on all modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive (optimized for mobile, tablet, desktop)
- Fixed positioning relative to viewport

## Performance
- Lightweight component (~50KB gzipped)
- No external API calls (runs locally)
- Instant message responses
- Smooth animations with CSS

## Future Enhancements

You can extend ProcoAI with:
1. **AI Integration** - Connect to Claude, GPT-4, or other LLMs
2. **Database Storage** - Save chat histories
3. **Analytics** - Track common questions asked
4. **Lead Generation** - Collect email from interested users
5. **Integration** - Connect to Zendesk, Intercom, or similar
6. **Multi-language** - Support for multiple languages
7. **Custom Actions** - Direct signup, demo booking, etc.

## Troubleshooting

**Chatbot not showing?**
- Ensure `<ProcoAI />` component is imported and rendered in your layout
- Check browser console for errors
- Verify Tailwind CSS is properly configured

**Styling issues?**
- Clear browser cache
- Ensure Tailwind CSS is built/compiled
- Check for conflicting CSS classes

**Message not sending?**
- Check browser console for errors
- Ensure input field has focus
- Try pressing Enter instead of clicking send

## Support
For issues or questions about the chatbot, refer to the knowledge base in `/lib/chatbot-data.ts` or customize responses in `/lib/chatbot-utils.ts`.

---

**Created:** January 25, 2026
**Platform:** Menu Wala by Proco Technologies
**Version:** 1.0.0
