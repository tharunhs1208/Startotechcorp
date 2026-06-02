import type { ModuleDef } from './types'

export const MODULES: ModuleDef[] = [
  {
    id: 'hr', icon: '', iconClass: 'hr',
    name: 'Human Resources',
    desc: 'Build your people operations workspace.',
    sections: [
      {
        label: 'Primary Goal', type: 'radio', name: 'hr_goal',
        options: ['Hire employees', 'Manage existing workforce', 'Both'],
      },
      {
        label: 'Enable Features', type: 'checkbox',
        options: ['Attendance', 'Leave Tracking', 'Payroll', 'Performance Reviews'],
      },
    ],
  },
  {
    id: 'sales', icon: '', iconClass: 'sales',
    name: 'Sales',
    desc: 'How does your team sell?',
    sections: [
      {
        label: 'Sales Model', type: 'radio', name: 'sales_model',
        options: ['B2B', 'B2C', 'Both'],
      },
      {
        label: 'Required Tools', type: 'checkbox',
        options: ['Lead Management', 'Deal Pipeline', 'Quotes', 'Forecasting'],
      },
    ],
  },
  {
    id: 'cs', icon: '', iconClass: 'cs',
    name: 'Customer Support',
    desc: "Select support channels you'll offer.",
    sections: [
      {
        label: 'Support Channels', type: 'checkbox',
        options: ['Email', 'Live Chat', 'WhatsApp', 'Phone', 'Customer Portal'],
      },
      {
        label: 'Support Team Size', type: 'select', name: 'support_size',
        options: ['1–5 Agents', '5–20 Agents', '20+ Agents'],
      },
    ],
  },
  {
    id: 'it', icon: '', iconClass: 'it',
    name: 'IT',
    desc: 'Configure your IT operations.',
    sections: [
      {
        label: 'Need Asset Tracking?', type: 'radio', name: 'it_asset',
        options: ['Yes', 'No'],
      },
      {
        label: 'Select Services', type: 'checkbox',
        options: ['Help Desk', 'Asset Management', 'Access Requests', 'Knowledge Base'],
      },
    ],
  },
  {
    id: 'acc', icon: '', iconClass: 'acc',
    name: 'Accounts',
    desc: 'Choose your accounting workflow.',
    sections: [
      {
        label: 'Financial Year Starts', type: 'select', name: 'fin_year',
        options: ['January', 'April', 'July', 'October'],
      },
      {
        label: 'Enable', type: 'checkbox',
        options: ['Invoices', 'Expenses', 'Budget Tracking', 'Tax Reports'],
      },
    ],
  },
  {
    id: 'legal', icon: '', iconClass: 'legal',
    name: 'Legal',
    desc: 'How involved is your legal team?',
    sections: [
      {
        label: 'Legal Setup', type: 'radio', name: 'legal_type',
        options: ['Internal legal team', 'External legal partner', 'Both'],
      },
      {
        label: 'Focus Areas', type: 'checkbox',
        options: ['Contracts', 'Compliance', 'Policy Management'],
      },
    ],
  },
  {
    id: 'dm', icon: '', iconClass: 'dm',
    name: 'Digital Marketing',
    desc: 'Select your growth channels.',
    sections: [
      {
        label: 'Channels', type: 'checkbox',
        options: ['Email Marketing', 'Social Media', 'SEO', 'Paid Ads', 'Landing Pages'],
      },
      {
        label: 'Monthly Leads Expected', type: 'select', name: 'dm_leads',
        options: ['< 100', '100 – 1,000', '1,000+'],
      },
    ],
  },
  {
    id: 'design', icon: '', iconClass: 'design',
    name: 'Design',
    desc: 'What kind of design work do you do?',
    sections: [
      {
        label: 'Design Disciplines', type: 'checkbox',
        options: ['UI/UX', 'Graphic Design', 'Branding', 'Motion Design', 'Product Design'],
      },
    ],
  },
  {
    id: 'fo', icon: '', iconClass: 'fo',
    name: 'Front Office',
    desc: 'Front desk operations setup.',
    sections: [
      {
        label: 'Visitor Management', type: 'radio', name: 'fo_visitor',
        options: ['Enable', 'Skip for now'],
      },
      {
        label: 'Additional Services', type: 'checkbox',
        options: ['Appointment Scheduling', 'Meeting Room Booking', 'Call Logs'],
      },
    ],
  },
  {
    id: 'civil', icon: '', iconClass: 'civil',
    name: 'Civil',
    desc: 'Manage construction and project delivery.',
    sections: [
      {
        label: 'Project Delivery Type', type: 'radio', name: 'civil_type',
        options: ['Residential', 'Commercial', 'Infrastructure'],
      },
      {
        label: 'Enable Modules', type: 'checkbox',
        options: ['Site Tracking', 'Resource Planning', 'Contractor Management', 'Safety Compliance'],
      },
    ],
  },
]