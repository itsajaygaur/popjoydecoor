// Transcribed from the POP JOY DECOOR policy document (Word). Contact details are rendered from SITE,
// so the document's contact boxes are not repeated here.
import { PRIVACY_PATH, REFUND_PATH, TERMS_PATH } from "@/lib/site";

export type Rich = string | (string | { text: string; href: string })[];

export type Block =
  | { type: "p"; text: Rich }
  | { type: "h3"; text: string }
  | { type: "ul"; items: Rich[] }
  | { type: "table"; head: string[]; rows: string[][] }
  | { type: "note"; text: string };

export type LegalDoc = {
  title: string;
  description: string;
  path: string;
  updated: string;
  intro: Block[];
  sections: { heading: string; blocks: Block[] }[];
};

const UPDATED = "21 October 2026";

export const REFUND_POLICY: LegalDoc = {
  title: "Payment, Cancellation & Refund Policy",
  description: "Booking advance, payment, cancellation, rescheduling and refund terms for Pop Joy Decoor balloon decoration services in Delhi NCR.",
  path: REFUND_PATH,
  updated: UPDATED,
  intro: [
    {
      type: "p",
      text: "At Pop Joy Decoor, we believe every celebration deserves to be special. We provide balloon decoration and event styling services for birthdays, anniversaries, baby showers, welcome-baby celebrations, room decorations, surprise parties, and other special occasions across Delhi NCR.",
    },
    {
      type: "p",
      text: "This Payment, Cancellation & Refund Policy explains the terms applicable to bookings, advance payments, cancellations, rescheduling, refunds, and our decoration services.",
    },
    { type: "p", text: "By booking our services, customers agree to the applicable terms outlined below." },
  ],
  sections: [
    {
      heading: "Booking Policy",
      blocks: [
        {
          type: "ul",
          items: [
            "Customers can book balloon decoration and event styling services through our website, phone, WhatsApp, or other available booking channels.",
            "A booking advance of ₹500 is required to reserve the selected date and time, unless a different amount is communicated and agreed upon.",
            "A booking is considered confirmed once the required advance payment has been received and the booking details have been acknowledged by Pop Joy Decoor.",
            "Customers should provide accurate information, including their name, contact number, event date, setup time, venue address, and selected decoration theme.",
            "Customers are advised to confirm the decoration package, inclusions, and any additional requirements before making the payment.",
            "Booking slots are subject to availability. An inquiry or payment screenshot alone does not guarantee confirmation until the payment and booking have been verified.",
          ],
        },
      ],
    },
    {
      heading: "Payment Policy",
      blocks: [
        {
          type: "p",
          text: "Pop Joy Decoor accepts payments through UPI and other payment methods accepted by Pop Joy Decoor.",
        },
        {
          type: "ul",
          items: [
            "The booking advance must be paid to confirm the reservation.",
            "The remaining balance is payable after the decoration setup is completed, in accordance with the agreed booking terms.",
            "Any additional services, extra decoration items, transportation charges, or changes requested by the customer may incur additional costs.",
            "Customers should retain their payment receipts or transaction references for future communication.",
            "If a payment is deducted but the booking is not confirmed, customers should contact us with the transaction details so we can verify the payment.",
            "Customers must ensure that payments are made only through the official payment details provided by Pop Joy Decoor.",
          ],
        },
      ],
    },
    {
      heading: "Cancellation & Refund Policy",
      blocks: [
        {
          type: "p",
          text: "We understand that plans can change. If you need to cancel a confirmed booking, please notify Pop Joy Decoor as early as possible.",
        },
        {
          type: "p",
          text: "The following cancellation policy applies according to the time remaining before the scheduled event.",
        },
        {
          type: "table",
          head: ["Cancellation timing", "Refund percentage"],
          rows: [
            ["More than 48 hours before the event", "90%"],
            ["24 hours to 48 hours before the event", "60%"],
            ["12 hours to less than 24 hours before the event", "40%"],
            ["Less than 12 hours before the event", "No refund"],
          ],
        },
        {
          type: "p",
          text: "The cancellation time will be calculated using the scheduled event date and time recorded in the confirmed booking.",
        },
        { type: "h3", text: "Refund Calculation Example" },
        {
          type: "p",
          text: "If a customer has paid an advance of ₹500, the refund will be calculated as follows:",
        },
        {
          type: "table",
          head: ["Cancellation timing", "Refund amount", "Amount retained"],
          rows: [
            ["More than 48 hours before the event", "₹450", "₹50"],
            ["24–48 hours before the event", "₹300", "₹200"],
            ["12–24 hours before the event", "₹200", "₹300"],
            ["Less than 12 hours before the event", "₹0", "₹500"],
          ],
        },
        {
          type: "p",
          text: "These examples assume that the refund percentage is applied to the ₹500 booking advance.",
        },
        {
          type: "p",
          text: "Any additional payments already made will be assessed according to the applicable cancellation terms, work completed, costs incurred, and applicable law. No term of this policy excludes mandatory consumer rights.",
        },
      ],
    },
    {
      heading: "Rescheduling Policy",
      blocks: [
        {
          type: "p",
          text: "Customers who wish to change their event date or time should contact Pop Joy Decoor as early as possible.",
        },
        {
          type: "ul",
          items: [
            "All rescheduling requests are subject to availability of the decoration team and the requested time slot.",
            "Rescheduling requests made more than 48 hours before the event will be considered subject to availability.",
            "Requests made within 48 hours of the event may be subject to additional charges depending on preparation, materials purchased, and team allocation.",
            "Last-minute rescheduling cannot be guaranteed.",
            "Any price difference resulting from a change in theme, package, venue, date, or service requirements must be communicated and agreed upon before proceeding.",
            "A rescheduled booking will be considered confirmed only after Pop Joy Decoor acknowledges the revised booking details.",
          ],
        },
      ],
    },
    {
      heading: "Customized Decorations & Special Orders",
      blocks: [
        {
          type: "p",
          text: "Pop Joy Decoor provides customized decorations based on customer preferences, event themes, and reference images.",
        },
        { type: "p", text: "Examples include:" },
        {
          type: "ul",
          items: [
            "Personalized birthday backdrops and name boards.",
            "Customized balloons and printed decorations.",
            "Birthday number setups and themed balloon arrangements.",
            "Baby shower and welcome-baby decorations.",
            "Anniversary and romantic room decorations.",
            "Custom cut-outs, props, and other personalized items.",
          ],
        },
        {
          type: "p",
          text: "Customized items may require advance preparation and may not be suitable for reuse or resale.",
        },
        {
          type: "p",
          text: "If a booking is cancelled after customized materials have been produced or specific materials have been purchased, the associated costs may be considered when assessing the refund, subject to applicable law and any terms communicated to the customer before purchase.",
        },
      ],
    },
    {
      heading: "Changes to Decoration Packages",
      blocks: [
        {
          type: "p",
          text: "Customers should review their selected decoration package before confirming their booking.",
        },
        {
          type: "ul",
          items: [
            "Requests to change the decoration theme, colors, design, or package after confirmation are subject to availability.",
            "Changes that require additional materials, labor, transportation, or preparation may result in additional charges.",
            "Any additional charges will be communicated to the customer for approval before the additional work is undertaken.",
            "Reference images are provided for inspiration. Minor variations in balloon shades, materials, product availability, and final presentation may occur.",
            "Pop Joy Decoor will make reasonable efforts to deliver the agreed decoration concept and package inclusions.",
          ],
        },
      ],
    },
    {
      heading: "Delays, Venue Access & Customer Responsibilities",
      blocks: [
        {
          type: "p",
          text: "Customers are responsible for providing correct event details and ensuring that the decoration team can access the venue at the agreed setup time.",
        },
        {
          type: "ul",
          items: [
            "The customer must provide an accurate venue address and any necessary entry or access instructions.",
            "If venue permissions, society approvals, parking arrangements, or other permissions are required, the customer should arrange them in advance unless otherwise agreed.",
            "Delays caused by restricted access, incorrect venue details, or customer-requested changes may affect the setup schedule.",
            "If additional waiting time, transportation, or repeat visits become necessary due to circumstances attributable to the customer, reasonable additional charges may apply after communication with the customer.",
            "Pop Joy Decoor will make reasonable efforts to complete the setup within the agreed timeframe.",
          ],
        },
      ],
    },
    {
      heading: "Refund Processing Time",
      blocks: [
        { type: "p", text: "Once a refund has been approved:" },
        {
          type: "ul",
          items: [
            "Refunds will generally be initiated within 5–7 working days.",
            "Refunds will normally be sent through the original payment method wherever possible.",
            "The time taken for the refund to appear in the customer's account may depend on the bank, UPI application, or payment provider.",
            "Customers may be asked to provide the relevant transaction reference or booking details to verify the payment.",
            "If a refund is delayed beyond the expected processing period, customers may contact Pop Joy Decoor for an update.",
          ],
        },
        {
          type: "p",
          text: "The stated processing period is an estimated timeframe and does not override any mandatory refund deadlines under applicable law.",
        },
      ],
    },
    {
      heading: "Service Quality, Complaints & Resolution",
      blocks: [
        { type: "p", text: "Customer satisfaction is important to Pop Joy Decoor." },
        {
          type: "p",
          text: "If a customer experiences an issue with a decoration setup, they should contact us as soon as reasonably possible and provide details of the concern, along with photographs or other relevant evidence where available.",
        },
        { type: "p", text: "Depending on the circumstances, possible resolutions may include:" },
        {
          type: "ul",
          items: [
            "Correction of the decoration, where feasible.",
            "Rework or replacement of affected items.",
            "A partial refund or other appropriate compensation.",
            "Another mutually agreed resolution.",
          ],
        },
        {
          type: "p",
          text: "Each complaint will be assessed based on the confirmed booking, agreed package inclusions, services delivered, and the nature of the issue.",
        },
        {
          type: "p",
          text: "Nothing in this policy prevents customers from exercising their rights under applicable consumer-protection laws.",
        },
      ],
    },
    {
      heading: "Returns Policy",
      blocks: [
        {
          type: "p",
          text: "Our primary service involves on-site decoration using balloons, backdrops, props, and other materials assembled or installed for a specific event.",
        },
        {
          type: "ul",
          items: [
            "Returns generally do not apply to decoration services once the service has been performed.",
            "Installed, inflated, used, or personalized decoration materials may not be suitable for return or reuse.",
            "If a separately supplied physical product is defective, damaged, or different from what was agreed, customers should contact us promptly so the issue can be reviewed.",
            "Any applicable remedy will be determined in accordance with the circumstances and applicable law.",
          ],
        },
      ],
    },
    {
      heading: "Unforeseen Circumstances",
      blocks: [
        {
          type: "p",
          text: "Events may sometimes be affected by circumstances outside the control of the customer or Pop Joy Decoor, including severe weather, government restrictions, venue closures, transportation disruptions, or other unforeseen events.",
        },
        {
          type: "p",
          text: "In such circumstances, we will make reasonable efforts to work with the customer to identify a suitable solution, which may include rescheduling, an alternative arrangement, or an appropriate refund.",
        },
        {
          type: "p",
          text: "If Pop Joy Decoor is unable to provide a confirmed service, the customer will be offered an appropriate resolution based on the circumstances and applicable law.",
        },
      ],
    },
    {
      heading: "Privacy & Booking Information",
      blocks: [
        {
          type: "p",
          text: "Information provided during booking, such as names, contact details, venue addresses, event dates, and payment references, may be used to:",
        },
        {
          type: "ul",
          items: [
            "Confirm and manage bookings.",
            "Coordinate decoration services and venue access.",
            "Process payments, cancellations, and refunds.",
            "Respond to customer inquiries and complaints.",
            "Maintain necessary business and transaction records.",
          ],
        },
        {
          type: "p",
          text: "Customer information will be handled in accordance with applicable privacy and data-protection requirements.",
        },
      ],
    },
    {
      heading: "Amendments to This Policy",
      blocks: [
        {
          type: "p",
          text: "Pop Joy Decoor reserves the right to update this policy when necessary to reflect changes in services, business operations, or legal requirements.",
        },
        {
          type: "p",
          text: "Updates will be published on our website with the revised date. The applicable terms for an existing booking will be assessed in light of the terms communicated and agreed upon when the booking was made, subject to applicable law.",
        },
        { type: "p", text: "Customers are encouraged to review this page before confirming a booking." },
      ],
    },
    {
      heading: "Contact Us",
      blocks: [
        {
          type: "p",
          text: "If you have any questions about bookings, payments, cancellations, rescheduling, or refunds, please contact Pop Joy Decoor.",
        },
        {
          type: "note",
          text: "Important Notice: By confirming a booking, customers acknowledge that they have been informed of the applicable payment, cancellation, and refund terms. This policy is intended to provide transparency and does not limit any rights available under applicable Indian law.",
        },
      ],
    },
  ],
};

export const PRIVACY_POLICY: LegalDoc = {
  title: "Privacy Policy",
  description: "How Pop Joy Decoor collects, uses, shares and protects your personal information when you browse our website or book a decoration.",
  path: PRIVACY_PATH,
  updated: UPDATED,
  intro: [],
  sections: [
    {
      heading: "Introduction",
      blocks: [
        {
          type: "p",
          text: "Welcome to Pop Joy Decoor. We respect your privacy and are committed to protecting the personal information you share with us through our website, booking channels, WhatsApp, phone calls, and other customer communication methods.",
        },
        {
          type: "p",
          text: "This Privacy Policy explains how Pop Joy Decoor collects, uses, stores, shares, and protects personal information when you browse our website, enquire about our services, or book a decoration service.",
        },
        {
          type: "p",
          text: "Our services include balloon decorations, birthday decorations, anniversary setups, baby shower decorations, welcome-baby celebrations, room decorations, themed party setups, and other event decoration services across Delhi NCR.",
        },
        {
          type: "p",
          text: "In this policy, the terms “Pop Joy Decoor,” “we,” “us,” and “our” refer to our decoration business. The terms “you” and “your” refer to customers and website visitors.",
        },
        {
          type: "p",
          text: "By using our website or providing your information to us, you acknowledge this Privacy Policy. Where consent is required by law, we will seek it as applicable.",
        },
      ],
    },
    {
      heading: "Scope of This Policy",
      blocks: [
        { type: "p", text: "This Privacy Policy applies to personal information collected through:" },
        {
          type: "ul",
          items: [
            "Our official website.",
            "Booking enquiries and service requests.",
            "WhatsApp messages, phone calls, and other communication channels.",
            "Payment confirmations and transaction-related communications.",
            "Customer feedback, complaints, and support requests.",
            "Other interactions relating to our decoration services.",
          ],
        },
        {
          type: "p",
          text: "This policy does not govern third-party websites, payment applications, social media platforms, or other services that operate under their own privacy policies.",
        },
      ],
    },
    {
      heading: "Information We Collect",
      blocks: [
        {
          type: "p",
          text: "We collect only the information reasonably necessary to respond to enquiries, manage bookings, provide services, process payments, and operate our business.",
        },
        { type: "h3", text: "Personal Information Provided by You" },
        { type: "p", text: "Depending on your interaction with us, we may collect:" },
        {
          type: "ul",
          items: [
            "Full name.",
            "Mobile number and WhatsApp number.",
            "Email address, if provided.",
            "Event date and preferred setup time.",
            "Venue address and location details.",
            "Selected decoration theme and package.",
            "Personalization details, such as names, ages, messages, and event preferences.",
            "Reference photographs or images shared for decoration planning.",
            "Booking history, customer communications, feedback, and complaints.",
          ],
        },
        { type: "p", text: "Please share only information that is necessary for your booking or enquiry." },
        { type: "h3", text: "Payment Information" },
        {
          type: "p",
          text: "We may collect payment-related information necessary to verify and manage your booking, including:",
        },
        {
          type: "ul",
          items: [
            "Payment amount.",
            "Transaction reference or UPI transaction ID.",
            "Payment date and status.",
            "Booking advance and outstanding balance information.",
            "Refund and cancellation records.",
          ],
        },
        {
          type: "p",
          text: "Payments may be made through UPI or other payment methods accepted by Pop Joy Decoor.",
        },
        {
          type: "p",
          text: "We do not ask customers to share their UPI PIN, banking passwords, OTPs, or other confidential authentication credentials through WhatsApp, phone calls, or email.",
        },
        {
          type: "p",
          text: "Payment information processed by a third-party payment provider may also be subject to that provider’s privacy policy and security practices.",
        },
        { type: "h3", text: "Information Collected Automatically" },
        {
          type: "p",
          text: "When you visit our website, certain technical information may be collected automatically by our website hosting provider or other tools, depending on the services enabled on the website.",
        },
        { type: "p", text: "This may include:" },
        {
          type: "ul",
          items: [
            "IP address.",
            "Browser type and version.",
            "Device type and operating system.",
            "Pages visited and approximate visit duration.",
            "Referring website or page.",
            "Technical logs relating to website performance and security.",
            "Cookie or analytics information, where applicable.",
          ],
        },
        {
          type: "p",
          text: "We use such information only for relevant purposes, such as website operation, security, performance monitoring, and improving the customer experience.",
        },
      ],
    },
    {
      heading: "How We Use Your Information",
      blocks: [
        { type: "p", text: "Pop Joy Decoor may use your personal information for the following purposes:" },
        { type: "p", text: "Booking and service delivery" },
        {
          type: "ul",
          items: [
            "Confirming bookings and checking availability.",
            "Planning decoration themes and arrangements.",
            "Coordinating setup dates, times, and venue access.",
            "Communicating customization requirements to the decoration team.",
          ],
        },
        { type: "p", text: "Payments and refunds" },
        {
          type: "ul",
          items: [
            "Verifying booking advances and payments.",
            "Maintaining transaction records.",
            "Managing cancellations and rescheduling requests.",
            "Processing eligible refunds and resolving payment disputes.",
          ],
        },
        { type: "p", text: "Customer support" },
        {
          type: "ul",
          items: [
            "Answering enquiries.",
            "Providing booking confirmations and updates.",
            "Responding to feedback and complaints.",
            "Resolving service-related issues.",
          ],
        },
        { type: "p", text: "Business operations" },
        {
          type: "ul",
          items: [
            "Maintaining business and accounting records.",
            "Improving our services and website.",
            "Preventing fraudulent bookings and unauthorized transactions.",
            "Meeting applicable legal and regulatory obligations.",
          ],
        },
        { type: "p", text: "Marketing and promotions" },
        {
          type: "p",
          text: "Where permitted by law and subject to any required consent, we may use your contact information to share offers, promotions, or updates about our decoration services. You may opt out of promotional communications at any time.",
        },
        {
          type: "p",
          text: "Essential messages concerning existing bookings, payments, or service changes may still be sent where necessary.",
        },
      ],
    },
    {
      heading: "WhatsApp, Phone Calls, and Customer Communications",
      blocks: [
        {
          type: "p",
          text: "Pop Joy Decoor may communicate with customers through WhatsApp, telephone calls, SMS, or email, depending on the contact details provided.",
        },
        { type: "p", text: "These communications may include:" },
        {
          type: "ul",
          items: [
            "Booking confirmation.",
            "Event date and setup-time confirmation.",
            "Decoration design discussions.",
            "Payment and refund updates.",
            "Requests for missing booking information.",
            "Customer support and feedback.",
            "Promotional messages, where permitted.",
          ],
        },
        {
          type: "p",
          text: "When you communicate with us through a third-party platform, that platform may process your information under its own privacy policy and terms.",
        },
        {
          type: "p",
          text: "Please avoid sharing sensitive personal or financial information through ordinary messages.",
        },
      ],
    },
    {
      heading: "Sharing of Personal Information",
      blocks: [
        { type: "p", text: "We do not sell customers’ personal information to third parties." },
        { type: "p", text: "We may share relevant information when necessary for the following purposes:" },
        { type: "p", text: "Service providers and decoration teams" },
        {
          type: "p",
          text: "We may share your name, contact details, event date, venue address, and decoration requirements with team members, decorators, or service partners who need the information to complete your booking.",
        },
        { type: "p", text: "Payment service providers" },
        {
          type: "p",
          text: "Transaction-related information may be processed by banks, UPI providers, or other payment services to verify payments and manage refunds.",
        },
        { type: "p", text: "Website hosting and technical providers" },
        {
          type: "p",
          text: "Hosting providers, security services, or technical support providers may process certain information to maintain and operate our website.",
        },
        { type: "p", text: "Professional advisers" },
        {
          type: "p",
          text: "Where necessary, information may be shared with accountants, legal advisers, or other professional service providers for legitimate business purposes.",
        },
        { type: "p", text: "Government authorities and legal obligations" },
        {
          type: "p",
          text: "We may disclose information when required by applicable law, a valid legal request, a court order, or an authorized government authority.",
        },
        {
          type: "p",
          text: "Any sharing of personal information will be limited to what is reasonably necessary for the relevant purpose, subject to applicable law and appropriate safeguards.",
        },
      ],
    },
    {
      heading: "Cookies and Website Tracking",
      blocks: [
        {
          type: "p",
          text: "Our website may use cookies or similar technologies to improve functionality, understand website traffic, maintain security, and enhance the browsing experience.",
        },
        { type: "p", text: "Depending on the tools enabled, cookies may be used to:" },
        {
          type: "ul",
          items: [
            "Support essential website functions.",
            "Remember certain preferences.",
            "Measure website performance.",
            "Understand how visitors interact with our pages.",
            "Support advertising or marketing measurement, where applicable.",
          ],
        },
        {
          type: "p",
          text: "You can manage or disable cookies through your browser settings. However, disabling certain cookies may affect some website features.",
        },
        {
          type: "p",
          text: "Where required by applicable law, we will obtain consent before using non-essential cookies or similar tracking technologies.",
        },
      ],
    },
    {
      heading: "Data Security",
      blocks: [
        {
          type: "p",
          text: "Pop Joy Decoor takes reasonable measures to protect personal information against unauthorized access, misuse, alteration, loss, or disclosure.",
        },
        { type: "p", text: "Depending on the systems used, these measures may include:" },
        {
          type: "ul",
          items: [
            "Restricting access to customer information.",
            "Using trusted website hosting and service providers.",
            "Maintaining appropriate security settings.",
            "Limiting the sharing of booking information to people who need it.",
            "Reviewing suspicious activity and unauthorized access concerns.",
          ],
        },
        {
          type: "p",
          text: "However, no website, electronic communication method, or storage system can be guaranteed to be completely secure.",
        },
        {
          type: "p",
          text: "Customers should protect their own devices and accounts and should never disclose their UPI PIN, OTP, or banking passwords to anyone claiming to represent Pop Joy Decoor.",
        },
      ],
    },
    {
      heading: "Data Retention",
      blocks: [
        {
          type: "p",
          text: "We retain personal information only for as long as reasonably necessary for the purposes described in this Privacy Policy, subject to applicable legal requirements.",
        },
        { type: "p", text: "For example, we may retain information to:" },
        {
          type: "ul",
          items: [
            "Complete and manage bookings.",
            "Maintain payment, accounting, and refund records.",
            "Respond to complaints and resolve disputes.",
            "Maintain relevant business records.",
            "Meet legal or regulatory obligations.",
            "Establish, exercise, or defend legal claims.",
          ],
        },
        {
          type: "p",
          text: "When personal information is no longer required, we will take appropriate steps to delete it or anonymize it, subject to applicable law and any legitimate retention requirements.",
        },
      ],
    },
    {
      heading: "Your Privacy Rights",
      blocks: [
        { type: "p", text: "Subject to applicable law, you may have the right to:" },
        {
          type: "ul",
          items: [
            "Request information about the personal data we hold about you.",
            "Request correction of inaccurate or incomplete information.",
            "Request deletion of personal information where applicable.",
            "Withdraw consent where processing is based on consent.",
            "Opt out of promotional communications.",
            "Raise concerns about the handling of your personal information.",
            "Submit a privacy-related complaint through the appropriate channel.",
          ],
        },
        {
          type: "p",
          text: "To exercise these rights, please contact us using the details provided in the Contact Us section.",
        },
        {
          type: "p",
          text: "We may need to verify your identity before processing a request. Certain information may need to be retained where required by law or necessary to resolve a legitimate dispute.",
        },
      ],
    },
    {
      heading: "Children's Privacy",
      blocks: [
        {
          type: "p",
          text: "Our services are generally booked by adults for celebrations involving children, including birthdays and other family occasions.",
        },
        {
          type: "p",
          text: "We do not intentionally seek to collect personal information directly from children for independent bookings. Where a parent or guardian provides a child's name, age, photograph, or other details for a decoration, we will use that information only as reasonably necessary to fulfil the requested service and in accordance with applicable law.",
        },
        {
          type: "p",
          text: "Parents or guardians who have concerns about information provided in connection with a booking may contact us to request an appropriate review.",
        },
      ],
    },
    {
      heading: "Photographs, Videos, and Promotional Use",
      blocks: [
        {
          type: "p",
          text: "Customers may share photographs, reference images, or event details with Pop Joy Decoor to help us plan and execute decoration services.",
        },
        {
          type: "p",
          text: "We may use these materials to fulfil the requested service and coordinate decoration arrangements.",
        },
        {
          type: "p",
          text: "We will not assume that permission to provide a photograph for a booking also grants permission to publish it for marketing purposes.",
        },
        {
          type: "p",
          text: "If we wish to use identifiable customer photographs, event photographs, or videos for promotional purposes, we will obtain any consent or authorization required by applicable law.",
        },
        {
          type: "p",
          text: "Customers may contact us if they have questions about photographs or other media shared with us.",
        },
      ],
    },
    {
      heading: "Third-Party Links and Services",
      blocks: [
        {
          type: "p",
          text: "Our website or communications may contain links to third-party websites, social media pages, maps, payment applications, or other online services.",
        },
        {
          type: "p",
          text: "These services may collect or process information independently under their own privacy policies.",
        },
        {
          type: "p",
          text: "Pop Joy Decoor does not control the privacy practices or security of third-party platforms. We encourage customers to review the applicable policies before sharing information with those services.",
        },
      ],
    },
    {
      heading: "International Data Transfers",
      blocks: [
        {
          type: "p",
          text: "Some third-party website, hosting, communication, or analytics providers may process information using infrastructure located outside India.",
        },
        {
          type: "p",
          text: "Where such processing occurs, personal information will be handled in accordance with applicable legal requirements and any relevant safeguards.",
        },
        { type: "p", text: "We do not claim that all information is stored exclusively in India." },
      ],
    },
    {
      heading: "Changes to This Privacy Policy",
      blocks: [
        {
          type: "p",
          text: "We may update this Privacy Policy from time to time to reflect changes in our services, website technology, business operations, or legal requirements.",
        },
        {
          type: "p",
          text: "The revised policy will be published on our website with an updated “Last Updated” date.",
        },
        {
          type: "p",
          text: "Customers are encouraged to review this page periodically to stay informed about how their information is handled.",
        },
        {
          type: "p",
          text: "Where required by applicable law, we will provide notice or seek consent for material changes.",
        },
      ],
    },
    {
      heading: "Applicable Law",
      blocks: [
        {
          type: "p",
          text: "This Privacy Policy will be interpreted in accordance with the applicable laws of India, including relevant data-protection and consumer-protection requirements.",
        },
        {
          type: "p",
          text: "Nothing in this policy is intended to restrict any rights or remedies that cannot lawfully be excluded under applicable law.",
        },
      ],
    },
    {
      heading: "Contact Us",
      blocks: [
        {
          type: "p",
          text: "If you have any questions, concerns, requests, or complaints regarding this Privacy Policy or the handling of your personal information, please contact Pop Joy Decoor.",
        },
        {
          type: "p",
          text: "We will review privacy-related requests and respond within the applicable legal timeframe.",
        },
      ],
    },
  ],
};

export const TERMS: LegalDoc = {
  title: "Terms & Conditions",
  description: "Terms governing the use of the Pop Joy Decoor website and the booking of our balloon decoration services in Delhi NCR.",
  path: TERMS_PATH,
  updated: UPDATED,
  intro: [],
  sections: [
    {
      heading: "Introduction",
      blocks: [
        {
          type: "p",
          text: "Welcome to Pop Joy Decoor. These Terms & Conditions govern your use of our website and the booking of our decoration services.",
        },
        {
          type: "p",
          text: "Pop Joy Decoor provides balloon decorations, birthday party setups, anniversary decorations, baby shower decorations, welcome-baby celebrations, room decorations, themed backdrops, and other event decoration services across Delhi NCR.",
        },
        {
          type: "p",
          text: "By accessing our website, contacting us for a booking, or confirming a service, you agree to these Terms & Conditions and our applicable policies.",
        },
        { type: "p", text: "Please read these terms carefully before placing a booking." },
      ],
    },
    {
      heading: "Eligibility",
      blocks: [
        {
          type: "ul",
          items: [
            "Customers booking our services must be at least 18 years old or have a parent or legal guardian make the booking on their behalf.",
            "Customers must provide accurate contact details, event information, and venue details.",
            "Customers are responsible for ensuring they have the necessary permission to arrange decorations at the selected venue.",
          ],
        },
      ],
    },
    {
      heading: "Nature of Services",
      blocks: [
        {
          type: "p",
          text: "Pop Joy Decoor provides event decoration services based on the package, theme, customization, and requirements agreed upon with the customer.",
        },
        { type: "p", text: "Our services may include:" },
        {
          type: "ul",
          items: [
            "Birthday balloon decorations.",
            "Anniversary and romantic room decorations.",
            "Baby shower and welcome-baby decorations.",
            "Kids' birthday theme decorations.",
            "Balloon arches, garlands, and entrance gates.",
            "Backdrops, panels, props, and personalized name boards.",
            "Other customized decoration arrangements.",
          ],
        },
        {
          type: "p",
          text: "The availability of services depends on the event date, location, materials, design requirements, and team availability.",
        },
      ],
    },
    {
      heading: "Booking & Confirmation",
      blocks: [
        {
          type: "ul",
          items: [
            "A booking advance of ₹500 is generally required to reserve a decoration slot, unless a different amount is agreed upon.",
            "Bookings are subject to availability and are confirmed only after the required advance payment and acknowledgment by Pop Joy Decoor.",
            "Customers must provide the correct event date, setup time, venue address, contact number, and selected decoration package.",
            "Customers should verify the agreed package inclusions before making payment.",
            "Any changes to the booking after confirmation are subject to availability and may involve additional charges.",
            "Pop Joy Decoor is not responsible for booking errors resulting from incorrect information provided by the customer, except where otherwise required by law.",
          ],
        },
      ],
    },
    {
      heading: "Pricing & Payments",
      blocks: [
        {
          type: "ul",
          items: [
            "Prices will be communicated before the booking is confirmed.",
            "Payments may be made through UPI or other payment methods accepted by Pop Joy Decoor.",
            "The booking advance must be paid to reserve the slot.",
            "The remaining balance is payable after completion of the decoration setup, according to the agreed booking terms.",
            "Additional items, changes to the original package, extra transportation, or other requested services may incur additional charges.",
            "Any additional charges will be communicated to the customer before the additional service is provided.",
            "Customers should retain payment confirmations and transaction references.",
          ],
        },
        {
          type: "p",
          text: "Customers must not share their UPI PIN, OTP, banking password, or other confidential payment credentials with anyone claiming to represent Pop Joy Decoor.",
        },
      ],
    },
    {
      heading: "Cancellation, Rescheduling & Refunds",
      blocks: [
        {
          type: "p",
          text: "All cancellations, rescheduling requests, and refunds are governed by our separate Payment, Cancellation & Refund Policy.",
        },
        { type: "p", text: "The standard cancellation schedule is:" },
        {
          type: "table",
          head: ["Cancellation timing before event", "Refund of booking advance"],
          rows: [
            ["More than 48 hours", "90%"],
            ["24–48 hours", "60%"],
            ["12–24 hours", "40%"],
            ["Less than 12 hours", "No refund"],
          ],
        },
        {
          type: "p",
          text: "The applicable percentage is calculated on the advance payment, subject to the terms communicated at booking, actual costs where relevant, and applicable law.",
        },
        {
          type: "p",
          text: "Rescheduling is subject to availability. Additional charges may apply where preparation, customized materials, transportation, or other expenses have already been incurred.",
        },
        {
          type: "p",
          text: [
            "Read the complete policy here: ",
            { text: "Payment, Cancellation & Refund Policy", href: REFUND_PATH },
            ".",
          ],
        },
      ],
    },
    {
      heading: "Decoration Design & Customization",
      blocks: [
        {
          type: "ul",
          items: [
            "Customers may share reference photographs or designs to communicate their preferred theme.",
            "Reference photographs are for guidance and do not guarantee an identical final appearance.",
            "Minor variations may occur because of differences in balloon shades, material availability, lighting, venue conditions, and product substitutions.",
            "Customized items, including name boards, printed balloons, cut-outs, and personalized props, require sufficient preparation time.",
            "Changes requested after materials have been prepared may involve additional charges.",
            "Pop Joy Decoor will make reasonable efforts to deliver the agreed design and package inclusions.",
          ],
        },
        {
          type: "p",
          text: "Any material change to the agreed package will be communicated to the customer.",
        },
      ],
    },
    {
      heading: "Setup Timing & Venue Access",
      blocks: [
        {
          type: "p",
          text: "Customers must provide accurate venue details and ensure that the decoration team can access the location at the agreed time.",
        },
        {
          type: "ul",
          items: [
            "Customers should arrange any required society, hotel, apartment, or venue permissions in advance.",
            "Setup timing may be affected by venue restrictions, access delays, traffic, weather, or circumstances outside our reasonable control.",
            "If the customer provides an incorrect address or cannot provide access, additional travel or waiting charges may apply where justified and communicated.",
            "Customers should inform us in advance about parking restrictions, entry procedures, stairs, elevators, or other access limitations.",
            "Pop Joy Decoor will make reasonable efforts to complete the setup within the agreed timeframe.",
          ],
        },
      ],
    },
    {
      heading: "Balloons & Decoration Lifespan",
      blocks: [
        { type: "p", text: "Balloons and decorative materials are affected by environmental conditions." },
        {
          type: "ul",
          items: [
            "Balloon size, appearance, and lifespan may vary with temperature, humidity, direct sunlight, airflow, air conditioning, and installation conditions.",
            "Balloons may gradually deflate, shrink, oxidize, or lose their original appearance.",
            "Outdoor installations are more exposed to weather and environmental conditions.",
            "Fresh flowers, if included, may change appearance depending on temperature and handling.",
            "LED lights and other decorative props should be used according to their intended purpose.",
          ],
        },
        {
          type: "p",
          text: "Our decorations are designed to look their best during the agreed event period. We do not guarantee that balloons or perishable decorative materials will maintain the same appearance indefinitely.",
        },
      ],
    },
    {
      heading: "Wall, Paint & Surface Disclaimer",
      blocks: [
        {
          type: "p",
          text: "Certain decoration installations may involve tapes, hooks, adhesives, stands, or other mounting materials.",
        },
        {
          type: "p",
          text: "Although we make reasonable efforts to use appropriate materials and installation methods:",
        },
        {
          type: "ul",
          items: [
            "We cannot guarantee that every wall, wallpaper, painted surface, or textured surface will remain completely unaffected.",
            "Older, damp, peeling, fragile, or previously damaged surfaces may be more susceptible to damage.",
            "Customers should inform us about delicate surfaces, freshly painted walls, or venue restrictions before installation.",
            "We will take reasonable precautions during installation and removal.",
          ],
        },
        {
          type: "p",
          text: "Nothing in this section excludes responsibility for damage caused by negligence or any other liability that cannot legally be excluded.",
        },
      ],
    },
    {
      heading: "Rental Items & Decorative Equipment",
      blocks: [
        {
          type: "p",
          text: "Certain bookings may include rental items, such as backdrop frames, stands, panels, neon signs, LED lights, props, and other reusable equipment.",
        },
        { type: "p", text: "Where rental items are provided:" },
        {
          type: "ul",
          items: [
            "Customers must take reasonable care of the items while they are at the venue.",
            "Rental items must not be moved, altered, dismantled, or misused without permission.",
            "Customers must allow the team to collect the rental items at the agreed time.",
            "Missing, lost, or damaged items may result in reasonable repair or replacement charges, where supported by the circumstances.",
            "Any applicable rental conditions and charges will be communicated before the booking is confirmed.",
          ],
        },
        {
          type: "p",
          text: "Customers should not dispose of, retain, or attempt to return rental equipment to another location without prior approval.",
        },
      ],
    },
    {
      heading: "Customer Responsibilities & Conduct",
      blocks: [
        {
          type: "p",
          text: "Customers are expected to provide a safe and accessible working environment for the decoration team.",
        },
        { type: "p", text: "Customers must:" },
        {
          type: "ul",
          items: [
            "Treat team members and service personnel respectfully.",
            "Provide accurate booking and venue information.",
            "Ensure reasonable access to the setup area.",
            "Inform us about known venue restrictions or safety concerns.",
            "Avoid interfering with electrical equipment, lighting installations, stands, or decorative structures after installation.",
            "Ensure children and guests are kept away from potentially unsafe equipment during setup.",
          ],
        },
        {
          type: "p",
          text: "If the team encounters harassment, threats, unsafe conditions, or serious obstruction, work may be paused while the concern is addressed. Where necessary, the service may be discontinued in accordance with the circumstances and applicable law.",
        },
      ],
    },
    {
      heading: "Safety & Use of Decorations",
      blocks: [
        { type: "p", text: "Customers must use decorations and equipment responsibly." },
        {
          type: "ul",
          items: [
            "Do not overload electrical sockets or tamper with electrical connections.",
            "Keep electrical equipment away from water and wet surfaces.",
            "Keep candles, open flames, and heat sources away from balloons and flammable decorative materials.",
            "Do not climb on balloon arches, backdrop frames, stands, or other decorative structures.",
            "Keep small balloon pieces away from young children because they can pose a choking hazard.",
            "Follow any safety instructions provided by the decoration team.",
          ],
        },
        {
          type: "p",
          text: "Customers must not modify or dismantle installations in a manner that creates a safety risk.",
        },
      ],
    },
    {
      heading: "Photography & Promotional Use",
      blocks: [
        {
          type: "p",
          text: "Pop Joy Decoor may take photographs of completed decoration setups for service documentation or quality review.",
        },
        {
          type: "p",
          text: "Photographs or videos containing identifiable customers, children, private spaces, or personal information will not automatically be used for public marketing merely because the decoration service was booked.",
        },
        {
          type: "p",
          text: "Where consent or authorization is required for promotional use, we will obtain it before publishing the relevant material.",
        },
        {
          type: "p",
          text: "Customers may contact us with questions or requests regarding photographs shared with us.",
        },
      ],
    },
    {
      heading: "Intellectual Property",
      blocks: [
        {
          type: "p",
          text: "Unless otherwise stated, the original text, branding, logos, website design, photographs, graphics, and other content published by Pop Joy Decoor are protected by applicable intellectual property laws.",
        },
        {
          type: "ul",
          items: [
            "Customers may browse our website and use its content for personal, non-commercial purposes.",
            "Content must not be copied, republished, sold, or commercially exploited without the necessary permission.",
            "Third-party photographs, characters, logos, and designs may belong to their respective owners.",
            "Customers are responsible for ensuring that materials they provide for customization are authorized for the intended use.",
          ],
        },
        {
          type: "p",
          text: "Nothing in this section transfers ownership of intellectual property to the customer unless expressly agreed in writing.",
        },
      ],
    },
    {
      heading: "Third-Party Services",
      blocks: [
        {
          type: "p",
          text: "Certain materials, equipment, transport, or other services may be obtained from third-party suppliers.",
        },
        {
          type: "p",
          text: "Availability may depend on supplier stock, delivery schedules, venue rules, and other operational factors.",
        },
        {
          type: "p",
          text: "Where a substitution becomes necessary, Pop Joy Decoor will make reasonable efforts to provide an appropriate alternative and communicate material changes to the customer.",
        },
        {
          type: "p",
          text: "Nothing in these terms excludes responsibility that Pop Joy Decoor may have under applicable law for the services it provides.",
        },
      ],
    },
    {
      heading: "Complaints & Service Resolution",
      blocks: [
        {
          type: "p",
          text: "If a customer believes that the completed setup differs materially from the agreed booking, they should contact Pop Joy Decoor as soon as reasonably possible.",
        },
        { type: "p", text: "Customers are encouraged to provide:" },
        {
          type: "ul",
          items: [
            "Their booking details.",
            "A description of the concern.",
            "Photographs or videos, where available.",
            "Details of the agreed package or specific service issue.",
          ],
        },
        {
          type: "p",
          text: "We will review the complaint and determine an appropriate response based on the booking terms and circumstances. Possible remedies may include correction of the setup, rework, a partial refund, or another appropriate resolution.",
        },
        { type: "p", text: "Any complaint will be handled subject to applicable consumer-protection law." },
      ],
    },
    {
      heading: "Limitation of Liability",
      blocks: [
        {
          type: "p",
          text: "Pop Joy Decoor will provide its services with reasonable care and in accordance with the agreed booking.",
        },
        {
          type: "p",
          text: "To the extent permitted by law, we are not responsible for indirect losses arising from circumstances beyond our reasonable control, including third-party venue restrictions, customer-provided incorrect information, or unforeseeable external disruptions.",
        },
        {
          type: "p",
          text: "Nothing in these Terms & Conditions excludes or limits liability for fraud, willful misconduct, negligence where liability cannot be excluded, or any other liability that cannot lawfully be limited under applicable law.",
        },
      ],
    },
    {
      heading: "Indemnification",
      blocks: [
        {
          type: "p",
          text: "Customers are responsible for their own conduct and for complying with reasonable safety instructions during the event.",
        },
        {
          type: "p",
          text: "Where permitted by law, customers may be responsible for direct losses or costs caused by their unlawful acts, intentional misuse of rental equipment, or damage arising from their breach of agreed booking terms.",
        },
        {
          type: "p",
          text: "Nothing in this section makes customers responsible for losses caused by Pop Joy Decoor's own negligence, unlawful conduct, or other liability that cannot legally be transferred.",
        },
      ],
    },
    {
      heading: "Force Majeure & Unforeseen Events",
      blocks: [
        {
          type: "p",
          text: "Circumstances beyond reasonable control may affect a scheduled decoration service. These may include severe weather, natural disasters, government restrictions, emergencies, transport disruptions, venue closures, or sudden supply interruptions.",
        },
        {
          type: "p",
          text: "If such circumstances occur, Pop Joy Decoor will make reasonable efforts to notify the customer and discuss available alternatives.",
        },
        {
          type: "p",
          text: "Depending on the situation, alternatives may include rescheduling, a suitable substitute arrangement, or an appropriate refund based on the circumstances and applicable law.",
        },
      ],
    },
    {
      heading: "Privacy & Personal Information",
      blocks: [
        {
          type: "p",
          text: "Personal information provided during enquiries or bookings will be handled in accordance with our Privacy Policy.",
        },
        {
          type: "p",
          text: "We may use relevant information to manage bookings, coordinate venue access, verify payments, provide customer support, and fulfil our services.",
        },
        {
          type: "p",
          text: [
            "For more information, please read our ",
            { text: "Privacy Policy", href: PRIVACY_PATH },
            ".",
          ],
        },
      ],
    },
    {
      heading: "Changes to These Terms",
      blocks: [
        {
          type: "p",
          text: "Pop Joy Decoor may update these Terms & Conditions when necessary to reflect changes in services, business operations, or legal requirements.",
        },
        {
          type: "p",
          text: "The revised terms will be published on our website with an updated date. For existing bookings, the terms communicated and agreed upon at the time of booking will be considered, subject to applicable law.",
        },
        { type: "p", text: "Customers are encouraged to review the terms before making a new booking." },
      ],
    },
    {
      heading: "Governing Law & Jurisdiction",
      blocks: [
        { type: "p", text: "These Terms & Conditions are governed by the applicable laws of India." },
        {
          type: "p",
          text: "Any dispute arising from the use of our website or booking of our services will be addressed through appropriate legal processes and the courts or forums having jurisdiction under applicable law.",
        },
        {
          type: "p",
          text: "Nothing in this section removes any mandatory consumer rights or jurisdictional protections available under Indian law.",
        },
      ],
    },
    {
      heading: "Contact Us",
      blocks: [
        {
          type: "p",
          text: "For questions about bookings, payments, decoration services, or these Terms & Conditions, please contact Pop Joy Decoor.",
        },
      ],
    },
  ],
};
