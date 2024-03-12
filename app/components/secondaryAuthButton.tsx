

export default function AuthButton({ children  }: { children: any }) {

    
    return (
        <button
            className="flex items-center justify-center border border-foreground/20 rounded-md px-4 py-2 text-foreground my-2 w-1/2 hover:bg-btn-background-hover"
        >
            {children}
        </button>
    )
     
}