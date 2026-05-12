import { Logos3 } from "@/components/ui/logos3";

const jhcClients = {
  logos: [
    {
      id: "logo-1",
      description: "Petronas",
      image: "/images/clients/petronas.png",
      className: "h-10 w-auto object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300",
    },
    {
      id: "logo-2",
      description: "Perodua",
      image: "/images/clients/perodua.png",
      className: "h-10 w-auto object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300",
    },
    {
      id: "logo-3",
      description: "Proton",
      image: "/images/clients/proton.jpg",
      className: "h-10 w-auto object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300",
    },
    {
      id: "logo-4",
      description: "Honda",
      image: "/images/clients/honda.jpg",
      className: "h-10 w-auto object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300",
    },
    {
      id: "logo-5",
      description: "Toyota",
      image: "/images/clients/toyota.jpg",
      className: "h-10 w-auto object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300",
    },
    {
      id: "logo-6",
      description: "HICM",
      image: "/images/clients/hicm.png",
      className: "h-10 w-auto object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300",
    },
    {
      id: "logo-7",
      description: "Sime Darby",
      image: "/images/clients/sime-darby.jpg",
      className: "h-10 w-auto object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300",
    },
  ],
};

function Logos3Demo() {
  return <Logos3 {...jhcClients} />;
}

export { Logos3Demo };
