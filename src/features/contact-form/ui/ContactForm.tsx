"use client";

import { useState } from "react";
import { Button } from "@/shared/ui/Button";
import { Input } from "@/shared/ui/Input";
import { Textarea } from "@/shared/ui/Textarea";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-3xl border border-accent/20 bg-accent/5 p-8 text-center">
        <span className="text-4xl">✓</span>
        <h3 className="mt-4 text-xl font-bold text-dark">Заявка отправлена!</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Ответим в течение 2 часов в рабочее время.
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => setSubmitted(false)}
        >
          Отправить ещё одну заявку
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Input label="ФИО" name="name" placeholder="Иван Иванов" required />
        <Input
          label="Телефон"
          name="phone"
          type="tel"
          placeholder="+7 (999) 123-45-67"
          required
        />
      </div>
      <Input
        label="Email"
        name="email"
        type="email"
        placeholder="ivan@example.ru"
        required
      />
      <Input
        label="Модель устройства"
        name="device"
        placeholder="например, Samsung A54, Lenovo IdeaPad"
        required
      />
      <Textarea
        label="Опишите проблему"
        name="message"
        placeholder="Расскажите, что случилось с устройством..."
        required
      />
      <Button type="submit" className="w-full">
        Отправить заявку на ремонт
      </Button>
    </form>
  );
}
