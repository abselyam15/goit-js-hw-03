function slugify(title) {
    const slug = title.toLowerCase()
    return slug.split(" ").join("-")
}

console.log("[TASK 1]: " + slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log("[TASK 1]: " + slugify("English for developer")); // "english-for-developer"
console.log("[TASK 1]: " + slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log("[TASK 1]: " + slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"