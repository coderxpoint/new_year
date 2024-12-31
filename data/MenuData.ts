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