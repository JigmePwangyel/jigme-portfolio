import EmailForm from "@/app/ui/contact_components/email_form";

export default function ContactsContent() {
  return (
    <div className="flex flex-col h-full w-full items-center">
      <h2 className="px-20 py-5 font-extrabold text-3xl mb-20">Contact</h2>
      <div className="flex gap-x-12">
        <div className="w-full">
          <h2 className="font-extrabold text-xl mb-5">Let's work together</h2>
          <p>
            Got an idea or need a developer? I’m always up for exciting
            projects, collaborations, and problem-solving. Let’s connect and
            build something awesome!
          </p>
        </div>
        <div className="w-full">
          <EmailForm />
        </div>
      </div>
    </div>
  );
}
