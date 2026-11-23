export const buttonBaseClasses =
  'inline-flex items-center gap-2 rounded-lg px-4 py-2 font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2';

export const buttonVariantClasses = {
  primary:
    'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',

  secondary:
    'bg-slate-200 text-slate-900 hover:bg-slate-300 focus:ring-slate-400',

  ghost:
    'border border-slate-300 bg-transparent text-slate-900 hover:bg-slate-100 focus:ring-slate-400',
};

export const buttonDisabledClasses =
  'cursor-not-allowed opacity-50';

export const textLinkClasses = 
  'text-blue-600 underline underline-offset-4 transition hover:text-blue-800 hover:decoration-blue-800';