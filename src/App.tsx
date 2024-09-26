import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import { useEffect } from "react";


export default function App() {
  useEffect(() => {
    // Проверяем, доступен ли WebApp API
    if (window.Telegram?.WebApp) {
      const webApp = window.Telegram.WebApp;
      // Устанавливаем цвет заголовка в красный
      webApp.headerColor = "#606572"; // Красный цвет
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}