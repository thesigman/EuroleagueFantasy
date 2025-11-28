import Button from '../components/Button';

export default function HomePage() {
  return (
    <>
      <h1 className="text-center text-5xl">HomePage!</h1>
      <h2 className="text-center text-2xl">Euroleague Fantasy</h2>
      <div className="text-center mt-6">
      <button className="btn-primary me-4">
        Primary color button
      </button>
      <button className="btn-secondary-outline">
        Secondary color button
      </button>
      </div>
    </>
  );
}

