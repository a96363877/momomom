import { LoaderShowcase } from '../components/LoaderShowcase';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="bg-white shadow-xl rounded-lg overflow-hidden max-w-4xl w-full">
        <h1 className="text-2xl font-bold p-6 bg-primary text-white">
          Colored Loader Components
        </h1>
        <LoaderShowcase />
      </div>
    </div>
  );
}
