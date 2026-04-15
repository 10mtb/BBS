'use client';

import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { MapPin, Phone, Mail, Clock, MessageSquare, Send, MapPinned } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { WhatsAppFloat } from '@/components/cta/whatsapp-float';

const contactSchema = z.object({
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Adresse email invalide'),
  phone: z.string().min(10, 'Numéro de téléphone invalide'),
  department: z.string().min(1, 'Sélectionnez votre département'),
  service: z.string().optional(),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères'),
});

type ContactForm = z.infer<typeof contactSchema>;

const departments = [
  { code: '75', name: 'Paris (75)' },
  { code: '92', name: 'Hauts-de-Seine (92)' },
  { code: '93', name: 'Seine-Saint-Denis (93)' },
  { code: '94', name: 'Val-de-Marne (94)' },
  { code: '77', name: 'Seine-et-Marne (77)' },
  { code: '78', name: 'Yvelines (78)' },
  { code: '91', name: 'Essonne (91)' },
  { code: '95', name: "Val-d'Oise (95)" },
];

export default function ContactPage() {
  const { toast } = useToast();

  const form = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      department: '',
      service: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactForm) => {
    console.log('Form submitted:', data);
    toast({
      title: 'Message envoyé !',
      description: 'Nous vous recontacterons dans les plus brefs délais.',
      variant: 'default',
    });
    form.reset();
  };

  return (
    <>
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <nav className="text-sm mb-6 text-slate-400">
            <Link href="/" className="hover:text-white">
              Accueil
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">Contact</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contactez-nous</h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            Besoin d&apos;un dépannage ? Appelez-nous directement ou remplissez le formulaire.
            Intervention rapide 24h/7j dans toute l&apos;Île-de-France.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl">Demande de devis gratuit</CardTitle>
                  <p className="text-muted-foreground">Remplissez le formulaire ci-dessous et nous vous recontacterons rapidement.</p>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-6"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Nom complet *</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Jean Dupont"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email *</FormLabel>
                              <FormControl>
                                <Input
                                  type="email"
                                  placeholder="jean.dupont@email.fr"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Téléphone *</FormLabel>
                              <FormControl>
                                <Input
                                  type="tel"
                                  placeholder="06 00 00 00 00"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="department"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Département *</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Sélectionnez votre département" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {departments.map((dept) => (
                                    <SelectItem key={dept.code} value={dept.code}>
                                      {dept.name}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <FormField
                        control={form.control}
                        name="service"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Type de service</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Sélectionnez un service" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="serrurerie">
                                  Serrurerie
                                </SelectItem>
                                <SelectItem value="plomberie">
                                  Plomberie
                                </SelectItem>
                                <SelectItem value="electricite">
                                  Électricité
                                </SelectItem>
                                <SelectItem value="fermetures">
                                  Fermetures & Menuiseries
                                </SelectItem>
                                <SelectItem value="autre">
                                  Autre demande
                                </SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Décrivez votre problème *</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Décrivez votre problème, votre adresse et vos disponibilités..."
                                className="min-h-[150px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full md:w-auto bg-bbs-green hover:bg-bbs-green-dark"
                        disabled={form.formState.isSubmitting}
                      >
                        <Send className="mr-2 h-4 w-4" />
                        Envoyer ma demande
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="bg-bbs-green text-white border-0">
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    Intervention urgente ?
                  </h3>
                  <p className="text-white/90 mb-4">
                    Appelez-nous directement pour une intervention rapide.
                  </p>
                  <Button size="lg" className="w-full bg-white text-bbs-green hover:bg-white/90" asChild>
                    <a href="tel:+33611708907">
                      <Phone className="mr-2 h-5 w-5" />
                      06 11 70 89 07
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Informations de contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-bbs-green mt-0.5" />
                    <div>
                      <p className="font-medium">Adresse</p>
                      <p className="text-sm text-muted-foreground">
                        88 Rue de Levis
                        <br />
                        75017 Paris
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-bbs-green mt-0.5" />
                    <div>
                      <p className="font-medium">Téléphone</p>
                      <a
                        href="tel:+33611708907"
                        className="text-sm text-bbs-green hover:underline"
                      >
                        06 11 70 89 07
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-bbs-green mt-0.5" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a
                        href="mailto:bbs75.contact@gmail.com"
                        className="text-sm text-bbs-green hover:underline"
                      >
                        bbs75.contact@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-bbs-green mt-0.5" />
                    <div>
                      <p className="font-medium">Horaires</p>
                      <p className="text-sm text-muted-foreground">
                        Dépannage urgent : 24h/7j
                        <br />
                        Tous les jours, même weekends
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPinned className="h-5 w-5 text-bbs-green mt-0.5" />
                    <div>
                      <p className="font-medium">Zone d&apos;intervention</p>
                      <p className="text-sm text-muted-foreground">
                        Toute l&apos;Île-de-France
                        <br />
                        Paris, 92, 93, 94, 77, 78, 91, 95
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-bbs-green" />
                    WhatsApp
                  </h3>
                  <Button
                    className="w-full bg-green-600 hover:bg-green-700"
                    asChild
                  >
                    <a
                      href="https://wa.me/33611708907"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Ouvrir WhatsApp
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <WhatsAppFloat />
    </>
  );
}
