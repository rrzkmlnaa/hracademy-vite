export interface FormErrors {
  fullname?: string;
  email?: string;
  whatsapp?: string;
  industry?: string;
  careerRole?: string;
}

export interface FormData {
  fullname: string;
  email: string;
  whatsapp: string;
  industry: string;
  careerRole: string;
}

export const validateField = (formData: FormData): FormErrors => {
  const { fullname, email, whatsapp, industry, careerRole } = formData;
  const errors: FormErrors = {};

  if (!fullname?.trim()) {
    errors.fullname = 'Full Name is required';
  } else if (fullname.trim().length < 3) {
    errors.fullname = 'Full Name should be at least 3 characters';
  }

  if (!email?.trim()) {
    errors.email = 'Email is required';
  } else {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      errors.email = 'Invalid email format';
    }
  }

  if (!whatsapp?.trim()) {
    errors.whatsapp = 'WhatsApp number is required';
  } else {
    const regex = /^\+\d{1,3}\s?\d{1,14}$/;
    if (!regex.test(whatsapp)) {
      errors.whatsapp = 'Invalid WhatsApp number format';
    } else if (whatsapp.startsWith('0')) {
      errors.whatsapp = 'WhatsApp number cannot start with +0, use format + (country code)';
    }
  }

  if (!whatsapp?.trim().replace(/\s/g, '').startsWith('+')) {
    errors.whatsapp = 'WhatsApp number must start with + (Country Code )';
  }

  if (!industry?.trim()) {
    errors.industry = 'Industry is required';
  }

  if (!careerRole?.trim()) {
    errors.careerRole = 'Career Role is required';
  }

  return errors;
};

export const hasErrors = (errors: FormErrors): boolean => {
  return Object.values(errors).some((error) => !!error);
};
