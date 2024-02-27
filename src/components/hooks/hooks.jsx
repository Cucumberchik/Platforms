export const handleLanguage = () => {
    let languageStorage = localStorage.getItem("langUser") || ""
    if (languageStorage == "kg") {
        return 1
    } else {
        return 0
    }
}