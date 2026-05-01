import type { FaqItem } from "~/components/section/SectionFaq.vue";

export interface FaqCategory {
  id: string;
  title: string;
  items: FaqItem[];
}

export const faqCategories: FaqCategory[] = [
  {
    id: "location-transport",
    title: "Location & Transport",
    items: [
      {
        question: "How far is the hotel from Calicut International Airport?",
        answer:
          "Kowju Airport Hotel is located less than 3 kilometres from Calicut International Airport. Most guests reach the hotel within 10 to 15 minutes by road.",
      },
      {
        question: "Does the hotel provide airport transfers?",
        answer:
          "Yes. A complimentary shared airport shuttle is available for all staying guests. Please inform the front desk of your flight details to arrange pickup. Availability is subject to scheduling.",
      },
      {
        question: "How can I reach the hotel by road?",
        answer:
          "The hotel is located at Aeropolis Pazhayangadi Road, Kondotty, Kerala 673638. It is accessible by taxi, auto-rickshaw, or private vehicle. For directions, visit https://maps.app.goo.gl/oAFiJgcTaxziRfPw5 or contact us at 077110 02233.",
      },
      {
        question: "Can the front desk arrange a taxi or local transport?",
        answer:
          "Yes. The front desk can assist with local taxi bookings and transport arrangements during your stay.",
      },
    ],
  },
  {
    id: "arrival-departure",
    title: "Arrival & Departure",
    items: [
      {
        question: "What are the check-in and check-out times?",
        answer: "Check-in begins at 2:00 PM. Check-out is at 12:00 noon.",
      },
      {
        question: "Is early check-in or late check-out available?",
        answer:
          "Early check-in and late check-out can be arranged based on room availability. Additional charges may apply. Please contact the front desk in advance to make a request.",
      },
      {
        question: "Can I store luggage at the hotel?",
        answer:
          "Yes. Luggage storage is available at the front desk before check-in and after check-out. Items are stored at the guest's own risk.",
      },
      {
        question: "Is parking available?",
        answer:
          "Yes. The hotel offers covered parking for up to 24 cars at no charge for staying guests. For events and banquet guests, an additional 50 open parking spaces are available.",
      },
    ],
  },
  {
    id: "reservations",
    title: "Reservations",
    items: [
      {
        question: "How do I make a booking?",
        answer:
          "Reservations can be made directly at https://kowjuhotels.com or by contacting us at hello@kowjuhotels.com or 077110 02233.",
      },
      {
        question: "What is the cancellation policy?",
        answer:
          "Reservations can be cancelled free of charge up to 24 hours before the date of arrival. Cancellations made within 24 hours of arrival may attract a charge depending on the rate type selected.",
      },
      {
        question: "What room types are available?",
        answer:
          "The hotel offers five room categories: Deluxe King, Premium King, Premium Twin, Family Room, and Suite Room. Each category is designed to suit different group sizes and stay requirements.",
      },
      {
        question: "What is the maximum occupancy per room?",
        answer:
          "Occupancy varies by room type. Deluxe and Premium rooms accommodate up to 2 adults and 2 children. Family Rooms accommodate up to 3 adults and 2 children. Suite Rooms accommodate up to 2 adults and 2 children. An extra bed can be arranged in applicable room categories.",
      },
      {
        question: "Are extra beds available?",
        answer:
          "Yes. Extra beds can be arranged in Premium King, Premium Twin, Family Room, and Suite Room categories, subject to availability. Please request this at the time of booking.",
      },
      {
        question: "What is the child policy?",
        answer:
          "Children under 12 years stay free when using existing bedding. For breakfast, children aged 7 to 12 are charged at 50% of the adult rate. Children aged 6 and under eat breakfast free of charge.",
      },
      {
        question: "Are connecting rooms available?",
        answer:
          "Please contact hello@kowjuhotels.com to check availability of adjoining rooms for your travel dates.",
      },
      {
        question: "Is a room upgrade possible?",
        answer:
          "Upgrade requests can be submitted at the time of booking or upon arrival, subject to availability. Contact the front desk or email hello@kowjuhotels.com for details.",
      },
    ],
  },
  {
    id: "rooms",
    title: "Rooms",
    items: [
      {
        question: "What amenities are available in all rooms?",
        answer:
          "All rooms are equipped with centralised air conditioning with individual controls, high-speed Wi-Fi, air purifier, smart toilet, 55-inch Full-HD LED Smart TV, 10-inch orthopedic mattress, electronic safe locker, tea kettle, refrigerator, work desk and chair, wardrobe, luggage rack, and an en-suite bathroom with rain shower and separate wet and dry areas.",
      },
      {
        question: "What makes the Suite Room different from other categories?",
        answer:
          "The Suite Room features a separate living room and bedroom, each with an individual TV, offering additional privacy and space. At 430 square feet, it is the largest room category available.",
      },
      {
        question: "Do rooms have air conditioning?",
        answer:
          "Yes. All rooms have centralised air conditioning with individual room temperature controls.",
      },
      {
        question: "Is Wi-Fi available in the rooms?",
        answer:
          "Yes. High-speed, secure Wi-Fi is complimentary in all rooms and public areas. Connection details are provided at check-in.",
      },
      {
        question: "What type of toilets are in the rooms?",
        answer:
          "All rooms are fitted with smart toilets featuring automated flushing, heated seats, and integrated bidets with adjustable settings for temperature, pressure, and position.",
      },
      {
        question: "Are hair dryers and irons available?",
        answer:
          "Hair dryers and ironing boards are available on request. Please contact the front desk.",
      },
      {
        question: "Are baby cots available?",
        answer:
          "Baby cots are available on request for young children. Please inform us at the time of booking.",
      },
    ],
  },
  {
    id: "dining",
    title: "Dining",
    items: [
      {
        question: "What dining options are available at the hotel?",
        answer:
          "Skipol Diner, located at the lobby level, is the hotel's in-house restaurant with a seating capacity of 40. It serves a breakfast buffet every morning and an a la carte menu for lunch and dinner throughout the day.",
      },
      {
        question: "What are the restaurant hours?",
        answer:
          "Skipol Diner is open daily. Breakfast is served in the morning, followed by a la carte service for lunch and dinner. Please check with the front desk for current timings during your stay.",
      },
      {
        question: "Is room service available?",
        answer: "Yes. Room service is available 24 hours a day, 7 days a week.",
      },
      {
        question: "Does the restaurant serve local cuisine?",
        answer:
          "Yes. The menu features authentic local cuisine alongside a broader selection of dishes to suit different preferences.",
      },
      {
        question:
          "Are vegetarian, vegan, or dietary-specific options available?",
        answer:
          "Yes. Please inform the restaurant team of any dietary requirements, allergies, or preferences and they will do their best to accommodate you.",
      },
    ],
  },
  {
    id: "hotel-facilities",
    title: "Hotel Facilities",
    items: [
      {
        question: "Is there a swimming pool?",
        answer:
          "Yes. The hotel has a rooftop swimming pool measuring 4.2m x 7.3m with a depth of 1.2m, along with a separate kids' pool measuring 1.8m x 2.6m with a depth of 0.5m. Children must be supervised by an adult at all times in and around the pool area.",
      },
      {
        question: "Is there a gym?",
        answer:
          "Yes. An in-house gym with cardio and weight training equipment is available to all staying guests at no additional charge.",
      },
      {
        question: "Is there a kids' games room?",
        answer:
          "Yes. A dedicated kids' games room with interactive games is available for staying guests at no additional charge.",
      },
      {
        question: "Is there a spa?",
        answer:
          "The hotel does not currently have an on-site spa. The front desk can recommend nearby wellness facilities.",
      },
      {
        question: "Is the front desk available 24 hours?",
        answer:
          "Yes. The front desk is staffed around the clock. For in-room assistance, dial the front desk from your room phone.",
      },
    ],
  },
  {
    id: "events-meetings",
    title: "Events & Meetings",
    items: [
      {
        question: "What event spaces does the hotel have?",
        answer:
          "The hotel has two dedicated event spaces. Mehmaan Hall is a pillarless banquet venue accommodating up to 200 guests, equipped with modern audio-visual technology. The Boardroom seats up to 15 guests and includes an LED TV and Wi-Fi access, suitable for meetings and corporate discussions.",
      },
      {
        question: "What seating configurations are available?",
        answer:
          "Mehmaan Hall can be configured for banquet, reception, theatre, classroom, and other arrangements depending on your event requirements. Contact the events team to confirm your preferred layout.",
      },
      {
        question: "Is catering available for events?",
        answer:
          "Yes. In-house catering is available for all events hosted at the hotel. Please discuss your requirements with the events team at the time of enquiry.",
      },
      {
        question: "How do I enquire about booking an event space?",
        answer:
          "Contact us at hello@kowjuhotels.com or call 077110 02233 to discuss your event requirements, available dates, and pricing.",
      },
    ],
  },
  {
    id: "payments",
    title: "Payments",
    items: [
      {
        question: "What payment methods are accepted?",
        answer:
          "The hotel accepts all major credit cards, UPI payments, and cash. For corporate bookings, bank transfers can be facilitated with prior arrangement.",
      },
      {
        question: "Can I get a GST invoice?",
        answer:
          "Yes. A GST-compliant invoice is available for all direct bookings. Please provide your company name, GSTIN, and billing address at check-in or email hello@kowjuhotels.com before your arrival to ensure the invoice is prepared correctly.",
      },
      {
        question: "How do I request an invoice after check-out?",
        answer:
          "If you did not receive your invoice at check-out, email hello@kowjuhotels.com with your reservation details and it will be sent to you.",
      },
      {
        question: "Is a deposit required at the time of booking?",
        answer:
          "Depending on the rate type and booking channel, a deposit or credit card pre-authorization may be required to confirm your reservation. Details will be communicated at the time of booking.",
      },
    ],
  },
  {
    id: "hotel-policies",
    title: "Hotel Policies",
    items: [
      {
        question: "Is smoking permitted in the rooms?",
        answer:
          "All rooms are non-smoking. Guests found smoking in rooms will be subject to a fine.",
      },
      {
        question: "Are pets allowed?",
        answer: "Pets are not permitted anywhere on the hotel premises.",
      },
      {
        question: "What is the noise policy?",
        answer:
          "Guests are requested to maintain reasonable noise levels, particularly in corridors and rooms during late hours, to ensure a comfortable stay for everyone.",
      },
      {
        question: "What should I do in an emergency?",
        answer:
          "Emergency exit routes and evacuation procedures are displayed in all rooms. Contact the front desk immediately in the event of any emergency.",
      },
    ],
  },
  {
    id: "sustainability",
    title: "Sustainability",
    items: [
      {
        question: "What sustainability practices does the hotel follow?",
        answer:
          "Kowju Airport Hotel is committed to environmentally responsible operations, including an in-house sewage treatment plant, on-site solar power plant, solar water heating, wall-mounted toiletry dispensers, reusable glass water bottles supported by an in-house RO water plant and bottle-filling station, and waste segregation into degradable and non-degradable streams.",
      },
    ],
  },
  {
    id: "accessibility",
    title: "Accessibility",
    items: [
      {
        question:
          "Is the hotel accessible for guests with mobility requirements?",
        answer:
          "Yes. The entire property is wheelchair accessible with step-free access across common areas. Designated parking spaces for differently-abled guests are also available.",
      },
      {
        question: "Are there specially equipped accessible rooms?",
        answer:
          "Dedicated differently-abled guest rooms with specialised fittings are not currently available. Guests with specific accessibility requirements are encouraged to contact us at hello@kowjuhotels.com before booking so we can identify the most suitable room and support your stay appropriately.",
      },
      {
        question:
          "Are meeting rooms accessible to guests with mobility requirements?",
        answer:
          "Yes. The hotel's meeting and event spaces are wheelchair accessible.",
      },
    ],
  },
];
