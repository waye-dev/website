export default function OfflinePage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-custom-100">
      <div className="text-center space-y-4 p-8">
        <h1 className="text-4xl font-inknutAntiqua">You're Offline</h1>
        <p className="text-lg font-workSans">
          This page requires an internet connection.
        </p>
        <p className="text-sm text-gray-600">
          Please check your connection and try again.
        </p>
      </div>
    </div>
  );
}

