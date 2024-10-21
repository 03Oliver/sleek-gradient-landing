import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="text-center max-w-3xl">
        <h1 className="text-5xl font-bold mb-6">Welcome to Collective.VC</h1>
        <p className="text-xl text-gray-700 mb-8">
          Collective.VC is an early-stage climate syndicate and media organisation working towards capital deployment for the benefit of humanity.
        </p>
        <div className="space-y-4">
          <Button className="w-full sm:w-auto" variant="default">
            Learn More
          </Button>
          <Button className="w-full sm:w-auto" variant="outline">
            Join Our Network
          </Button>
          <Button className="w-full sm:w-auto" variant="secondary">
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;