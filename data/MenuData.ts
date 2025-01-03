import { MenuCategory, MenuSubItem } from "@/types/menu";


export const accountsAndDepositsMenu: MenuCategory[] = [
    {
      title: "Accounts",
      items: [
        { label: "Saving", href: "/accounts/saving" },
        { label: "Checking", href: "/accounts/checking" },
        { label: "Business", href: "/accounts/business" },
        { label: "Student", href: "/accounts/student" },
      ],
    },
    {
      title: "Deposits",
      items: [
        { label: "Fixed Deposit", href: "/deposits/fixed" },
        { label: "Recurring Deposit", href: "/deposits/recurring" },
        { label: "Tax Saver FD", href: "/deposits/tax-saver" },
        { label: "Senior Citizen FD", href: "/deposits/senior-citizen" },
      ],
    },
    {
      title: "Services",
      items: [
        { label: "Online Banking", href: "/services/online-banking" },
        { label: "Mobile Banking", href: "/services/mobile-banking" },
        { label: "ATM Services", href: "/services/atm" },
        { label: "Loans", href: "/services/loans" },
      ],
    },
  ];
export  const quickLinks: MenuSubItem[] = [
    { label: "Open Savings Account", href: "/accounts/savings/open" },
    { label: "Apply for Loan", href: "/loans/apply" },
    { label: "Internet Banking", href: "/services/internet-banking" },
    { label: "Investment Plans", href: "/investments" },
    { label: "Customer Support", href: "/support" },
  ];
  
export const cards: MenuCategory[] = [
    {
      title: "Accounts",
      items: [
        { label: "Saving", href: "/accounts/saving" },
        { label: "Checking", href: "/accounts/checking" },
        { label: "Business", href: "/accounts/business" },
        { label: "Student", href: "/accounts/student" },
        { label: "Current", href: "/accounts/current" },
        { label: "Salary", href: "/accounts/salary" },
        { label: "Fixed Deposit", href: "/accounts/fixed-deposit" },
        { label: "Recurring Deposit", href: "/accounts/recurring-deposit" },
      ],
    },
    {
      title: "Deposits",
      items: [
        { label: "Fixed Deposit", href: "/deposits/fixed" },
        { label: "Recurring Deposit", href: "/deposits/recurring" },
        { label: "Tax Saver FD", href: "/deposits/tax-saver" },
        { label: "Senior Citizen FD", href: "/deposits/senior-citizen" },
        { label: "NRE FD", href: "/deposits/nre-fd" },
        { label: "NRO FD", href: "/deposits/nro-fd" },
        { label: "FCNR FD", href: "/deposits/fcnr-fd" },
      ],
    },
    {
      title: "Services",
      items: [
        { label: "Online Banking", href: "/services/online-banking" },
        { label: "Mobile Banking", href: "/services/mobile-banking" },
        { label: "ATM Services", href: "/services/atm" },
        { label: "Loans", href: "/services/loans" },
        { label: "Investment Plans", href: "/services/investment-plans" },
        { label: "Insurance", href: "/services/insurance" },
        { label: "Mutual Funds", href: "/services/mutual-funds" },
      ],
    },
  ];
  export const quickLinksCards: MenuSubItem[] = [
    { label: "Open Savings Account", href: "/accounts/savings/open" },
    { label: "Apply for Loan", href: "/loans/apply" },
    { label: "Internet Banking", href: "/services/internet-banking" },
    { label: "Investment Plans", href: "/investments" },
    { label: "Customer Support", href: "/support" },
    { label: "Contact Us", href: "/contact-us" },
  ];
  
  export const cards2: MenuCategory[] = [
    {
      title: "Cards",
      items: [
        { label: "Credit Card", href: "/cards/credit" },
        { label: "Debit Card", href: "/cards/debit" },
        { label: "Prepaid Card", href: "/cards/prepaid" },
        { label: "Gift Card", href: "/cards/gift" },
        { label: "Travel Card", href: "/cards/travel" },
        { label: "Business Card", href: "/cards/business" },
      ],
    },
    {
      title: "Loans",
      items: [
        { label: "Home Loan", href: "/loans/home" },
        { label: "Car Loan", href: "/loans/car" },
        { label: "Personal Loan", href: "/loans/personal" },
        { label: "Business Loan", href: "/loans/business" },
        { label: "Mortgage Loan", href: "/loans/mortgage" },
        { label: "Education Loan", href: "/loans/education" },
      ],
    },
    {
      title: "Investments",
      items: [
        { label: "Fixed Deposit", href: "/investments/fixed-deposit" },
        { label: "Recurring Deposit", href: "/investments/recurring-deposit" },
        { label: "Mutual Funds", href: "/investments/mutual-funds" },
        { label: "Stock Market", href: "/investments/stock-market" },
        { label: "Insurance", href: "/investments/insurance" },
        { label: "NPS", href: "/investments/nps" },
      ],
    },
  ];
  export const quickLinksCards2: MenuSubItem[] = [
    { label: "Open Fixed Deposit", href: "/investments/fixed-deposit/open" },
    { label: "Apply for Home Loan", href: "/loans/home/apply" },
    { label: "Internet Banking", href: "/services/internet-banking" },
    { label: "Investment Plans", href: "/investments" },
    { label: "Customer Support", href: "/support" },
    { label: "Contact Us", href: "/contact-us" },
  ];



  export const menuItems = [
    {
      title: "Accounts & Deposits",
      href: "#",
      id: "accounts",
      content: [
        {
          title: "Accounts",
          items: [
            { title: "Savings Account", href: "#", badge: "Up to 7% p.a." },
            { title: "Zero Balance Savings Account", href: "#" },
            { title: "Corporate Salary Account", href: "#" },
            { title: "Uniformed Personnel Account", href: "#" },
            { title: "Current Account", href: "#" },
          ],
        },
        {
          title: "Deposits",
          items: [
            { title: "Fixed Deposit", href: "#", badge: "Up to 7.99% p.a." },
            { title: "Recurring Deposit", href: "#" },
            {
              title: "Senior Citizen FD",
              href: "#",
              badge: "Up to 8.49% p.a.",
            },
            { title: "Auto Sweep FD", href: "#" },
          ],
        },
        {
          title: "Locker",
          items: [{ title: "Safe Deposit Locker", href: "#" }],
        },
      ],
      quickLinks: [
        { title: "Interest Rate", href: "#" },
        { title: "FD Calculator", href: "#" },
        { title: "FD Interest Rates", href: "#" },
        { title: "Open a Savings Account", href: "#" },
        { title: "Open a Fixed Deposit", href: "#" },
        { title: "CASA Welcome Kit", href: "#" },
        { title: "FAQs", href: "#" },
      ],
      promo: {
        title: "Save Today, Enjoy More Tomorrow",
        description: "Earn high interest up to 7% p.a. on savings",
        cta: "Open a Savings Account",
        image: "/ads.webp",
      },
    },
    {
      title: "Cards",
      href: "#",
      id: "cards",
      content: [
        {
          title: "Credit Cards",
          items: [
            { title: "Platinum Credit Card", href: "#" },
            { title: "Rewards Credit Card", href: "#" },
            { title: "Travel Credit Card", href: "#" },
          ],
        },
        {
          title: "Debit Cards",
          items: [
            { title: "Classic Debit Card", href: "#" },
            { title: "Platinum Debit Card", href: "#" },
          ],
        },
      ],
      quickLinks: [
        { title: "Compare Cards", href: "#" },
        { title: "Apply for Credit Card", href: "#" },
        { title: "Card Offers", href: "#" },
        { title: "Card Security", href: "#" },
      ],
      promo: {
        title: "Unlock Premium Benefits",
        description: "Get 5% cashback on all your purchases",
        cta: "Apply for Platinum Card",
        image: "/ads.webp",
      },
    },
    {
      title: "Loans",
      href: "#",
      id: "loans",
      content: [
        {
          title: "Personal Loans",
          items: [
            { title: "Instant Personal Loan", href: "#" },
            { title: "Salary Advance", href: "#" },
          ],
        },
        {
          title: "Home Loans",
          items: [
            { title: "New Home Loan", href: "#" },
            { title: "Home Loan Transfer", href: "#" },
          ],
        },
        {
          title: "Vehicle Loans",
          items: [
            { title: "Car Loan", href: "#" },
            { title: "Two-Wheeler Loan", href: "#" },
          ],
        },
      ],
      quickLinks: [
        { title: "Loan Eligibility", href: "#" },
        { title: "EMI Calculator", href: "#" },
        { title: "Apply for Loan", href: "#" },
        { title: "Loan Interest Rates", href: "#" },
      ],
      promo: {
        title: "Your Dream Home Awaits",
        description: "Get home loans at attractive interest rates",
        cta: "Apply for Home Loan",
        image: "/ads.webp",
      },
    },
    {
      title: "Apply Online",
      href: "#",
      id: "apply",
      content: [
        {
          title: "Quick Apply",
          items: [
            { title: "Open Savings Account", href: "#" },
            { title: "Apply for Credit Card", href: "#" },
            { title: "Apply for Personal Loan", href: "#" },
          ],
        },
      ],
      quickLinks: [
        { title: "Track Application", href: "#" },
        { title: "Required Documents", href: "#" },
        { title: "Application Guide", href: "#" },
      ],
      promo: {
        title: "Fast and Easy Applications",
        description: "Get approved in minutes",
        cta: "Start Your Application",
        image: "/ads.webp",
      },
    },
    {
      title: "Digital Banking",
      href: "#",
      id: "digital",
      content: [
        {
          title: "Online Services",
          items: [
            { title: "Internet Banking", href: "#" },
            { title: "Mobile Banking App", href: "#" },
            { title: "UPI Payments", href: "#" },
          ],
        },
      ],
      quickLinks: [
        { title: "Register for Net Banking", href: "#" },
        { title: "Download Mobile App", href: "#" },
        { title: "Digital Security Tips", href: "#" },
      ],
      promo: {
        title: "Bank Anytime, Anywhere",
        description: "Experience seamless digital banking",
        cta: "Get Started",
        image: "/ads.webp",
      },
    },
    {
      title: "% Rates & Offers",
      href: "#",
      id: "rates",
      content: [
        {
          title: "Current Rates",
          items: [
            { title: "Savings Account Rates", href: "#" },
            { title: "Fixed Deposit Rates", href: "#" },
            { title: "Loan Interest Rates", href: "#" },
          ],
        },
      ],
      quickLinks: [
        { title: "Compare Rates", href: "#" },
        { title: "Special Offers", href: "#" },
        { title: "Forex Rates", href: "#" },
      ],
      promo: {
        title: "Best-in-class Interest Rates",
        description: "Maximize your savings with our competitive rates",
        cta: "View All Rates",
        image: "/ads.webp",
      },
    },
    {
      title: "Investments & Insurance",
      href: "#",
      id: "investments",
      content: [
        {
          title: "Investments",
          items: [
            { title: "Mutual Funds", href: "#" },
            { title: "Stocks & Securities", href: "#" },
          ],
        },
        {
          title: "Insurance",
          items: [
            { title: "Life Insurance", href: "#" },
            { title: "Health Insurance", href: "#" },
            { title: "Car Insurance", href: "#" },
          ],
        },
      ],
      quickLinks: [
        { title: "Investment Calculator", href: "#" },
        { title: "Compare Insurance Plans", href: "#" },
        { title: "Portfolio Management", href: "#" },
      ],
      promo: {
        title: "Secure Your Future",
        description: "Explore our range of investment and insurance products",
        cta: "Start Investing",
        image: "/ads.webp",
      },
    },
  ];