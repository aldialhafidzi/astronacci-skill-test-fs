export default function ErrorMessage({ message }: { message?: string | boolean }) {
    if (!message) return <></>

    return (
        <p className="text-red-500 text-sm mt-1">
            {message}
        </p>
    )
}