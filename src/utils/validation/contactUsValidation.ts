export interface ContactErrors {
  firstname?: string;
  lastname?: string;
  email?: string;
  telephone?: string;
  company?: string;
  inquiry?: string;
  message?: string;
}

export const validateField = (contactData: ContactData): ContactErrors => {
  const { firstname, email, telephone, company, inquiry, message } = contactData;

  const errors: ContactErrors = {};

  if (!firstname?.trim()) {
    errors.firstname = 'First Name is required';
  } else if (firstname.trim().length < 3) {
    errors.firstname = 'First Name should be at least 3 characters';
  }

  if (!email?.trim()) {
    errors.email = 'Email is required';
  } else {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      errors.email = 'Invalid email format';
    }
  }

  if (!telephone?.trim()) {
    errors.telephone = 'WhatsApp number is required';
  } else {
    const regex = /^\+\d{1,3}\s?\d{1,14}$/;
    if (!regex.test(telephone)) {
      errors.telephone = 'Invalid WhatsApp number format';
    } else if (telephone.startsWith('0')) {
      errors.telephone = 'WhatsApp number cannot start with +0, use format + (country code)';
    }
  }

  if (!telephone?.trim().replace(/\s/g, '').startsWith('+')) {
    errors.telephone = 'WhatsApp number must start with + (Country Code )';
  }

  if (!company?.trim()) {
    errors.company = 'Company is required';
  }

  if (!inquiry?.trim()) {
    errors.inquiry = 'Inquiry is required';
  }
  if (!message?.trim()) {
    errors.message = 'Message is required';
  }

  return errors;
}

export const hasErrors = (errors: ContactErrors): boolean => {
  return Object.keys(errors).some((error) => !!error);
};

export interface ContactData {
  firstname: string;
  lastname: string;
  email: string;
  telephone: string;
  company: string;
  inquiry: string;
  message: string;
}