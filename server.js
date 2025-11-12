import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// تنظیم پوشه‌ی public برای فایل‌های استاتیک (CSS, تصاویر و ...)
app.use(express.static(path.join(__dirname, "public")));

// تنظیم view engine به EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// داده‌های فرضی برای محصولات (به‌جای دیتابیس)
const products = [
  {
    title: "صندلی راحتی",
    desc: "مدرن، شیک و مناسب دکور خانه شما",
    img: "meatball_poster_image_69b2cfb635.jpg",
  },
  {
    title: "میز ناهارخوری",
    desc: "طراحی مینیمال با چوب طبیعی",
    img: "PH_206788_12c292050b.jpg",
  },
  {
    title: "کاناپه خاکستری",
    desc: "راحت و مناسب فضای نشیمن",
    img: "63aee748-701b-4ccc-a986-a84f23eb1570.jpg",
  },
  {
    title: "لامپ ایستاده",
    desc: "نور گرم و دکوراتیو",
    img: "508b7fd0-6bdb-472d-ac73-da4ba7494568.jpg",
  },
];

// مسیر صفحه اصلی
app.get("/", (req, res) => {
  res.render("index", { products });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
