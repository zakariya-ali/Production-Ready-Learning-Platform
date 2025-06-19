export const getCurrentDate = () => new Date();

export const formatDate = (date: Date) => {
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
};

export const formatDateShort = (date: Date) => {
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
};

export const getRecentDates = (count: number) => {
  const dates = [];
  const now = getCurrentDate();
  
  for (let i = 0; i < count; i++) {
    const date = new Date(now);
    date.setDate(date.getDate() - (i * 2 + 1)); // Spread dates over recent days
    dates.push(date);
  }
  
  return dates;
};

export const getFutureDates = (count: number, startDaysFromNow: number = 7) => {
  const dates = [];
  const now = getCurrentDate();
  
  for (let i = 0; i < count; i++) {
    const date = new Date(now);
    date.setDate(date.getDate() + startDaysFromNow + (i * 7)); // Weekly intervals
    dates.push(date);
  }
  
  return dates;
};