# zenstreet.ai-assignment
// Project Structure
├── calendar-app/
│   ├── frontend/                 # Next.js frontend
│   │   ├── components/
│   │   │   ├── Calendar.tsx     # Main calendar view
│   │   │   ├── EventForm.tsx    # Form for creating/editing events
│   │   │   ├── EventCard.tsx    # Display individual events
│   │   │   └── NotificationManager.tsx
│   │   ├── pages/
│   │   │   └── index.tsx        # Main page
│   │   └── utils/
│   │       ├── validation.ts    # Form validation
│   │       └── notifications.ts  # Browser notification handling
│   │
│   └── backend/                 # NestJS backend
│       ├── src/
│       │   ├── events/
│       │   │   ├── event.entity.ts
│       │   │   ├── events.controller.ts
│       │   │   └── events.service.ts
│       │   └── main.ts
│       └── test/                # Unit tests

// Basic Event Interface
interface Event {
  id: string;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  attachments: {
    type: 'image' | 'video' | 'text';
    url: string;
  }[];
  notificationTime: Date;
  status: 'active' | 'snoozed' | 'completed';
}
