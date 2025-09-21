// mockRecipes.js
import mood1 from "../assets/Images/mood1.png";
import mood2 from "../assets/Images/mood2.png";
import mood3 from "../assets/Images/mood3.png";
import mood4 from "../assets/Images/mood4.png";
import mood5 from "../assets/Images/mood5.png";
import mood6 from "../assets/Images/mood6.png";
import snacks from "../assets/Images/snacks.png";
import dessert from "../assets/Images/dessert.png";
import lunch from "../assets/Images/lunch.png";
import dinner from "../assets/Images/dinner.png";
import frame10 from "../assets/Images/Frame 10.png";

const recipes = [
  {
    id: 1,
    name: "Chocolate Cake",
    tags: ["happy", "joy", "dessert"],
    image: mood2,
    description: "Rich chocolate cake to boost happiness.",
  },
  {
    id: 2,
    name: "Lavender Tea",
    tags: ["sad", "soothing", "drink"],
    image: mood1,
    description: "Calms anger and reduces stress.",
  },
  {
    id: 3,
    name: "Blueberry Smoothie",
    tags: ["confused", "clarity", "healthy"],
    image: mood3,
    description: "Sharpens focus for mental clarity.",
  },
  {
    id: 4,
    name: "Grilled Cheese",
    tags: ["confused", "depressed", "ease"],
    image: mood4,
    description: "Classic comfort food for low moods.",
  },
  {
    id: 5,
    name: "Pasta Primavera",
    tags: ["happy", "joy", "fresh"],
    image: snacks,
    description: "Light and fresh pasta for a joyful meal.",
  },
  {
    id: 6,
    name: "Chamomile Tea",
    tags: ["sad", "soothing", "relax"],
    image: mood5,
    description: "A warm drink to restore balance.",
  },
  {
    id: 7,
    name: "Avocado Toast",
    tags: ["confused", "clarity", "healthy"],
    image: mood6,
    description: "Keeps your mind sharp and energy steady.",
  },
  {
    id: 8,
    name: "Mac and Cheese",
    tags: ["sad", "depressed", "lift"],
    image: snacks,
    description: "Cheesy goodness to lift your spirits.",
  },
  {
    id: 9,
    name: "Fruit Salad",
    tags: ["happy", "joy", "refresh"],
    image: mood3,
    description: "A colorful bowl to brighten your day.",
  },
  {
    id: 10,
    name: "Green Tea",
    tags: ["sad", "cool", "focus"],
    image: mood1,
    description: "Soothes your mood while keeping focus.",
  },
  {
    id: 11,
    name: "Oatmeal with Berries",
    tags: ["confused", "clarity", "healthy"],
    image: mood2,
    description: "A brain-boosting breakfast.",
  },
  {
    id: 12,
    name: "Tomato Soup",
    tags: ["sad", "ease", "lift"],
    image: mood4,
    description: "Warm soup to make you feel safe.",
  },
  {
    id: 13,
    name: "Lemon Tart",
    tags: ["happy", "joy", "dessert"],
    image: dessert,
    description: "A tangy treat to brighten your mood.",
  },
  {
    id: 14,
    name: "Herbal Infusion",
    tags: ["depressed", "soothing", "relax"],
    image: dessert,
    description: "Herbs that melt away stress.",
  },
  {
    id: 15,
    name: "Quinoa Salad",
    tags: ["confused", "clarity", "fresh"],
    image: dessert,
    description: "Nutritious salad for mental clarity.",
  },
  {
    id: 16,
    name: "Banana Bread",
    tags: ["depressed", "lift", "dessert"],
    image: lunch,
    description: "Sweet bread that feels like a hug.",
  },
  {
    id: 17,
    name: "Mango Lassi",
    tags: ["happy", "refresh", "cool"],
    image: dinner,
    description: "Cool, sweet, and uplifting.",
  },
  {
    id: 18,
    name: "Iced Matcha Latte",
    tags: ["depressed", "focus", "cool"],
    image: frame10,
    description: "Balances calmness with alertness.",
  },
  {
    id: 19,
    name: "Spinach Omelette",
    tags: ["confused", "clarity", "protein"],
    image: dinner,
    description: "Protein-packed for a sharp mind.",
  },
  {
    id: 20,
    name: "Mashed Potatoes",
    tags: ["depressed", "ease", "warm"],
    image: dinner,
    description: "Creamy and warm for emotional comfort.",
  },
];

export default recipes;
