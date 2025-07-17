    // components/AuthLayout.tsx
    export default function AuthLayout({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-900 via-red-700 to-red-500 p-4">
        <div className="w-full max-w-sm bg-white rounded-3xl shadow-xl p-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-32 bg-red-700 rounded-b-[50%] -z-10" />
            <h2 className="text-white text-xl font-bold mb-8 text-center">{title}</h2>
            <div className="space-y-4">{children}</div>
        </div>
        </div>
    );
    }
