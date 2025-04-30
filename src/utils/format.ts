export const formatDate = (date: Date | null, format: string = "YYYY-MM-DD") => {
    if (!date) return ""
    return new Intl.DateTimeFormat("fa-IR").format(date)
  }
  