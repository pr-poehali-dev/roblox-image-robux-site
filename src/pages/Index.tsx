import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [robuxAmount, setRobuxAmount] = useState("1000");

  const handleGetRobux = () => {
    setShowPaymentForm(true);
  };

  const handlePayment = () => {
    // Placeholder для обработки платежа
    alert("Функция в разработке!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-orange-500 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-yellow-300 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-32 w-24 h-24 bg-green-300 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 right-10 w-12 h-12 bg-pink-300 rounded-full animate-bounce"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Icon name="Gamepad2" size={48} className="text-white" />
            <h1 className="text-6xl font-bold text-white font-[Montserrat] tracking-wide">
              ROBLOX
            </h1>
          </div>
          <p className="text-xl text-white/90 font-medium">
            Получи бесплатные Robux прямо сейчас!
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-2xl mx-auto">
          {!showPaymentForm ? (
            <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
              <CardHeader className="text-center pb-8">
                <div className="mx-auto mb-6">
                  <img
                    src="/img/90921598-2175-4c6e-ab11-ef28139d8631.jpg"
                    alt="Roblox Character"
                    className="w-48 h-48 object-cover rounded-2xl mx-auto shadow-lg"
                  />
                </div>
                <CardTitle className="text-4xl font-bold text-gray-800 mb-4 font-[Montserrat]">
                  Получить Robux
                </CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  Выбери количество Robux и получи их мгновенно!
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { amount: "500", bonus: "" },
                    { amount: "1000", bonus: "+100 бонус" },
                    { amount: "2500", bonus: "+500 бонус" },
                  ].map((option) => (
                    <Button
                      key={option.amount}
                      variant={
                        robuxAmount === option.amount ? "default" : "outline"
                      }
                      className={`h-20 flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 ${
                        robuxAmount === option.amount
                          ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                          : "border-2 border-gray-200 hover:border-blue-400"
                      }`}
                      onClick={() => setRobuxAmount(option.amount)}
                    >
                      <div className="flex items-center gap-2">
                        <Icon
                          name="Coins"
                          size={20}
                          className="text-yellow-500"
                        />
                        <span className="font-bold text-lg">
                          {option.amount}
                        </span>
                      </div>
                      {option.bonus && (
                        <span className="text-xs text-green-600 font-medium">
                          {option.bonus}
                        </span>
                      )}
                    </Button>
                  ))}
                </div>

                <Button
                  onClick={handleGetRobux}
                  className="w-full h-16 text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <Icon name="Zap" size={24} className="mr-2" />
                  ПОЛУЧИТЬ {robuxAmount} ROBUX
                </Button>
              </CardContent>
            </Card>
          ) : (
            <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl animate-scale-in">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold text-gray-800 mb-2 font-[Montserrat]">
                  Данные карты
                </CardTitle>
                <CardDescription className="text-lg text-gray-600">
                  Введите данные карты для получения {robuxAmount} Robux
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <Label
                      htmlFor="cardNumber"
                      className="text-lg font-medium text-gray-700"
                    >
                      Номер карты
                    </Label>
                    <Input
                      id="cardNumber"
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      className="h-12 text-lg border-2 border-gray-200 focus:border-blue-500 transition-colors"
                      maxLength={19}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label
                        htmlFor="expiryDate"
                        className="text-lg font-medium text-gray-700"
                      >
                        Дата окончания
                      </Label>
                      <Input
                        id="expiryDate"
                        type="text"
                        placeholder="MM/ГГ"
                        value={expiryDate}
                        onChange={(e) => setExpiryDate(e.target.value)}
                        className="h-12 text-lg border-2 border-gray-200 focus:border-blue-500 transition-colors"
                        maxLength={5}
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="cvv"
                        className="text-lg font-medium text-gray-700"
                      >
                        CVV
                      </Label>
                      <Input
                        id="cvv"
                        type="text"
                        placeholder="123"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                        className="h-12 text-lg border-2 border-gray-200 focus:border-blue-500 transition-colors"
                        maxLength={3}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button
                    onClick={() => setShowPaymentForm(false)}
                    variant="outline"
                    className="flex-1 h-12 text-lg border-2 border-gray-300 hover:border-gray-400 transition-colors"
                  >
                    <Icon name="ArrowLeft" size={20} className="mr-2" />
                    Назад
                  </Button>
                  <Button
                    onClick={handlePayment}
                    className="flex-1 h-12 text-lg bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <Icon name="Gift" size={20} className="mr-2" />
                    Получить бесплатно
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-white/80">
          <p className="text-lg font-medium mb-2">
            🎮 Безопасно • Быстро • Надежно
          </p>
          <div className="flex justify-center gap-6 text-sm">
            <span>✓ SSL защита</span>
            <span>✓ Мгновенная доставка</span>
            <span>✓ Поддержка 24/7</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
