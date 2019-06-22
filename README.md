# Pragmatask

## Use cases

### Schedule an appointment
- Display available task categories
- Set task category
- Display available tasks 
- Set task
- Set date (default to current week)
- Display available time slots
- Set time slots
- Login user (facebook/plateform/guest)
- Appointment confirm
- Add to calendar (iCalendar|Google|Outlook)
- Send SMS or mail to confirm appointment

### Re-schedule an appointment

### Ensure an appointment

- Send a SMS / mail
- Set response update or cancel appointment

### Cancel an appointment (user)

### Cancel an appointment (doctor)

### Show planning

## Global configuration

```
{
  location:{
    lat: 0
    long: 0
  }
  scheduling:{
    max_schedule_days: 0
  } 
}
```

## Entities

### Resource
```
{
  id: 0
  login: string
  passwd: string
  phone: email
  email: string
  role: enum
  skills: [enum]
  workings_hours: []
}
```

### Vacance
```
{
  id: 0
  resource_id: 0
  date_from: date
  date_to: date
}
```

### User

```
{
  id: 0
  lastname: string
  surname: string
  gender: string
  address: string
  city: string
  country: string
  zipcode: string
  birth_date: 0
  login: string
}
```

### Task 

```
{
  id:0
  category:enum
  desc:string
  duration: 0
  skills: [enum]
  contact_id:0
}
```

### Job

```
{
  id: 0
  user_id: 0
  room_id: 0
  task_id: 0  
  title: string
  desc: string
  time_from: date
  time_to: date
  created_at: date
  modified_at: date
  created_by: date
  modified_by: date
  cancellation_until: 0
  has_confirmed_at: date
  status: enum
}
```

### Room 

```
{
  id: 0
  name: string
  desc: string  
  created_at: date
  modified_at: date
  created_by: date
  modified_by: date
}
```

### Mail

### Notification

```
{
  contentText: string
  contentHtml: string
  subject: string
  schedule: {}
  transports: [
    {
      type: mail
      address: string
      id: 0
    }
  ]
  data: {}
  done: true
  id: 0
  user_id: 0
  appointment_id: 0
}
```

