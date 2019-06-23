# Pragmacare

## Use cases
- Booking
  - Schedule an appointment (propose first free slot)
  - Re-schedule an appointment
  - Ensure an appointment
  - Cancel an appointment (customer)
  - Cancel an appointment (teammate)
- Planning
  - Display teammates schedule (all, filtered)
  - Notify teammates on re-schedule
- Inventory
  - Display inventory
  - Display forecasting inventory, inventory coverage
  - Inventory alerts
  - Import/export inventory
  - Manage supply categories
- Catalogue
  - Proposed services record edit
- Room
  - Rooms record edit
- Customer
  - Customer record edit (RGPD)
  - Search, display Client history
  - Import/export customers records
- Provider
  - Search / Provider record edit
- Teammate
  - Teammate record edit (info, skills)
  - Teammate vacance edit
- Job tracking
  - Edit report (duration, used supplies)
- Statistics

## Open points

- No accounting
- No restricted area according to teammate role


## Global configuration

```
{
  location:{lat,long}
  scheduling:{
    max_schedule_days
  } 
}
```

## Entities

### Teammate
```
{
  login, passwd
  phone, email
  role
  skills
  workings_hours
}
```

### Skill

```
{
  name
  desc
}
```

### Vacance
```
{
  teammate
  date_from, date_to
}
```

### Customer

```
{
  lastname, surname
  gender
  address, city, country, zipcode
  birth_date
  login, passwd
}
```

### Task 

```
{
  category
  code, name, desc  
  duration
  skills
  required_supplies:[{supply, count}]
  pricing
}
```

### Supply

```
{
  code, category
  name, desc
  physical_count
}

```

### Job

```
{
  teammate
  room
  task
  title
  desc
  time_from, time_to
  created_at, modified_at
  created_by, modified_by
  cancellation_until
  has_confirmed_at
  status
  used_supplies
  actual_duration
}
```

### Room 

```
{
  name
  desc  
  created_at
  modified_at
  created_by
  modified_by
}
```

### Mail

### Notification

## Uses case details

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
- Booking

### Cancel an appointment (customer)

### Cancel an appointment (teammate)
- Planning### Display teammat schedule- Display currsent Inventory  Display teammates scheduleInventory
### Display forecasting Inventory- Inventory alerts

### Client record edit (RGPD)

### Display Client history