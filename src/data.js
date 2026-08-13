const menu = [
    { id: 1, title: "Pancakes", image: "https://shariq-restaurant-menu-application.vercel.app/images/pancakes.jpg", price: 180, rating: 4.8 },
    { id: 2, title: "French Toast", image: "https://shariq-restaurant-menu-application.vercel.app/images/french-toast.jpg", price: 150, rating: 4.7 },
    { id: 3, title: "Club Sandwich", image: "https://shariq-restaurant-menu-application.vercel.app/images/club-sandwich.jpg", price: 200, rating: 4.8 },
    { id: 4, title: "Halwa Puri", image: "https://shariq-restaurant-menu-application.vercel.app/images/halwa-puri.jpg", price: 150, rating: 4.9 },
    { id: 5, title: "Omelette", image: "https://shariq-restaurant-menu-application.vercel.app/images/omelette.jpg", price: 120, rating: 4.6 },
    { id: 6, title: "Chicken Shawarma", image: "https://shariq-restaurant-menu-application.vercel.app/images/chicken-shawarma.jpg", price: 200, rating: 4.8 },

    { id: 7, title: "Chicken Biryani", image: "https://shariq-restaurant-menu-application.vercel.app/images/chicken-biryani.jpg", price: 250, rating: 4.8 },
    { id: 8, title: "Chicken Karahi", image: "https://shariq-restaurant-menu-application.vercel.app/images/chicken-karahi.jpg", price: 280, rating: 4.9 },
    { id: 9, title: "Beef Pulao", image: "https://shariq-restaurant-menu-application.vercel.app/images/beef-pulao.png", price: 230, rating: 4.7 },
    { id: 10, title: "Chicken Qorma", image: "https://shariq-restaurant-menu-application.vercel.app/images/chicken-qorma.jpg", price: 260, rating: 4.8 },
    { id: 11, title: "Daal Chawal", image: "https://shariq-restaurant-menu-application.vercel.app/images/daal-chawal.jpg", price: 140, rating: 4.5 },
    { id: 12, title: "Chicken White Karahi", image: "https://shariq-restaurant-menu-application.vercel.app/images/chicken-white-karahi.jpg", price: 290, rating: 4.9 },

    { id: 13, title: "Chicken Handi", image: "https://shariq-restaurant-menu-application.vercel.app/images/chicken-handi.jpg", price: 290, rating: 4.9 },
    { id: 14, title: "Mutton Karahi", image: "https://shariq-restaurant-menu-application.vercel.app/images/mutton-karahi.jpg", price: 420, rating: 4.9 },
    { id: 15, title: "Chicken Tikka", image: "https://shariq-restaurant-menu-application.vercel.app/images/chicken-tikka.jpg", price: 350, rating: 4.8 },
    { id: 16, title: "Seekh Kebab", image: "https://shariq-restaurant-menu-application.vercel.app/images/seekh-kebab.jpg", price: 300, rating: 4.8 },
    { id: 17, title: "Nihari", image: "https://shariq-restaurant-menu-application.vercel.app/images/nihari.jpg", price: 300, rating: 5.0 },
    { id: 18, title: "Chapli Kebab", image: "https://shariq-restaurant-menu-application.vercel.app/images/chapli-kebab.jpg", price: 200, rating: 4.8 },

    { id: 19, title: "Chocolate Cake", image: "https://shariq-restaurant-menu-application.vercel.app/images/chocolate-cake.jpg", price: 1000, rating: 4.9 },
    { id: 20, title: "Cheesecake", image: "https://shariq-restaurant-menu-application.vercel.app/images/cheesecake.jpg", price: 220, rating: 4.9 },
    { id: 21, title: "Gulab Jamun", image: "https://shariq-restaurant-menu-application.vercel.app/images/gulab-jamun.jpg", price: 100, rating: 4.8 },
    { id: 22, title: "Ras Malai", image: "https://shariq-restaurant-menu-application.vercel.app/images/ras-malai.jpg", price: 120, rating: 4.9 },
    { id: 23, title: "Ice Cream", image: "https://shariq-restaurant-menu-application.vercel.app/images/ice-cream.jpg", price: 130, rating: 4.8 },
    { id: 24, title: "Kheer", image: "https://shariq-restaurant-menu-application.vercel.app/images/kheer.jpeg", price: 110, rating: 4.7 },

    { id: 25, title: "Zinger Burger", image: "https://shariq-restaurant-menu-application.vercel.app/images/zinger-burger.jpg", price: 280, rating: 4.9 },
    { id: 26, title: "Chicken Pizza", image: "https://shariq-restaurant-menu-application.vercel.app/images/chicken-pizza.jpg", price: 450, rating: 4.9 },
    { id: 27, title: "French Fries", image: "https://shariq-restaurant-menu-application.vercel.app/images/french-fries.jpg", price: 120, rating: 4.7 },
    { id: 28, title: "Chicken Roll", image: "https://shariq-restaurant-menu-application.vercel.app/images/chicken-roll.jpeg", price: 170, rating: 4.8 },
    { id: 29, title: "Samosa", image: "https://shariq-restaurant-menu-application.vercel.app/images/samosa.jpg", price: 50, rating: 4.7 },
    { id: 30, title: "Chicken Nuggets", image: "https://shariq-restaurant-menu-application.vercel.app/images/chicken-nuggets.jpg", price: 180, rating: 4.8 },

    { id: 31, title: "Mango Shake", image: "https://shariq-restaurant-menu-application.vercel.app/images/mango-shake.jpg", price: 150, rating: 4.9 },
    { id: 32, title: "Lassi", image: "https://shariq-restaurant-menu-application.vercel.app/images/lassi.jpg", price: 100, rating: 4.8 },
    { id: 33, title: "Cold Coffee", image: "https://shariq-restaurant-menu-application.vercel.app/images/cold-coffee.jpg", price: 180, rating: 4.8 },
    { id: 34, title: "Fresh Orange Juice", image: "https://shariq-restaurant-menu-application.vercel.app/images/fresh-orange-juice.jpg", price: 140, rating: 4.7 },
    { id: 35, title: "Mint Lemonade", image: "https://shariq-restaurant-menu-application.vercel.app/images/mint-lemonade.jpg", price: 120, rating: 4.8 },
    { id: 36, title: "Cold Drink", image: "https://shariq-restaurant-menu-application.vercel.app/images/cold-drink.jpg", price: 90, rating: 4.8 }
]

export default menu