'use client';

import { MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/33611708907"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
      aria-label="Contacter via WhatsApp"
    >
      <Button
        size="icon"
        className="h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all"
      >
        <MessageSquare className="h-7 w-7 text-white" />
      </Button>
    </a>
  );
}
