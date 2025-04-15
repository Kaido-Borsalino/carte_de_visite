import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Phone } from "lucide-react";

export default function CarteDeVisite() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6 flex items-center justify-center">
      <Card className="w-full max-w-3xl bg-gray-950 shadow-2xl rounded-2xl">
        <CardContent className="p-8">
          <h1 className="text-3xl font-bold mb-2 text-blue-400">Mohamed-Ali Harb</h1>
          <p className="text-lg text-gray-400 mb-6">DevOps & Support N3 – Systèmes & Réseaux</p>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2 text-blue-300">Compétences clés</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-300">
              <li>Infrastructure as Code : Terraform, Ansible</li>
              <li>CI/CD : Jenkins, GitLab CI, automatisation</li>
              <li>Conteneurisation : Docker, Kubernetes</li>
              <li>Linux (Red Hat, Ubuntu), Windows Server</li>
              <li>Monitoring : Prometheus, Zabbix, Centreon</li>
              <li>Virtualisation : VMware, Hyper-V</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2 text-blue-300">Objectif</h2>
            <p className="text-gray-300">
              Ouvert aux missions DevOps/Systèmes en France ou à l’international (Qatar, Émirats).<br />
              CDI, Freelance, ou Remote avec missions datacenter ou cloud.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2 text-blue-300">Contact</h2>
            <div className="space-y-2">
              <p className="flex items-center gap-2 text-gray-300">
                <Mail className="w-5 h-5" /> harb.mohamed.ali@gmail.com
              </p>
              <p className="flex items-center gap-2 text-gray-300">
                <Phone className="w-5 h-5" /> +33 7 88 80 39 92
              </p>
              <p className="flex items-center gap-2 text-gray-300">
                <Linkedin className="w-5 h-5" />
                <a
                  href="https://www.linkedin.com/in/mohamed-ali-harb-3754b3154/"
                  target="_blank"
                  className="underline hover:text-white"
                >
                  Profil LinkedIn
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2 text-blue-300">Formulaire de contact</h2>
            <form className="grid grid-cols-1 gap-4 mt-2">
              <input
                type="text"
                placeholder="Votre nom"
                className="p-2 rounded bg-gray-800 border border-gray-700 text-white"
              />
              <input
                type="email"
                placeholder="Votre email"
                className="p-2 rounded bg-gray-800 border border-gray-700 text-white"
              />
              <textarea
                placeholder="Votre message"
                rows={4}
                className="p-2 rounded bg-gray-800 border border-gray-700 text-white"
              ></textarea>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">Envoyer</Button>
            </form>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}
