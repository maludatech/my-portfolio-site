import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main className="min-h-screen">
      {/* ProfileSection Skeleton */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto flex flex-col items-center space-y-4">
          <Skeleton className="h-32 w-32 rounded-full" /> {/* Profile image */}
          <Skeleton className="h-8 w-64" /> {/* Name */}
          <Skeleton className="h-6 w-96" /> {/* Bio */}
          <Skeleton className="h-6 w-80" /> {/* Bio line 2 */}
        </div>
      </section>

      {/* AboutSection Skeleton */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <Skeleton className="h-8 w-48 mb-6" /> {/* Title */}
          <div className="space-y-4">
            <Skeleton className="h-4 w-full" /> {/* Paragraph */}
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        </div>
      </section>

      {/* ExperienceSection Skeleton */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <Skeleton className="h-8 w-48 mb-6" /> {/* Title */}
          <div className="space-y-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex space-x-4">
                <Skeleton className="h-12 w-12 rounded-full" />{" "}
                {/* Icon/Timeline */}
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-6 w-64" /> {/* Job title */}
                  <Skeleton className="h-4 w-48" /> {/* Company */}
                  <Skeleton className="h-4 w-32" /> {/* Date */}
                  <Skeleton className="h-4 w-full" /> {/* Description */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ProjectsSection Skeleton */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <Skeleton className="h-8 w-48 mb-6" /> {/* Title */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="h-40 w-full rounded-lg" />{" "}
                {/* Project image */}
                <Skeleton className="h-6 w-3/4" /> {/* Project title */}
                <Skeleton className="h-4 w-full" /> {/* Description */}
                <Skeleton className="h-4 w-5/6" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ContactSection Skeleton */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <Skeleton className="h-8 w-48 mb-6" /> {/* Title */}
          <div className="space-y-4">
            <Skeleton className="h-10 w-full" /> {/* Form input */}
            <Skeleton className="h-10 w-full" /> {/* Form input */}
            <Skeleton className="h-20 w-full" /> {/* Textarea */}
            <Skeleton className="h-10 w-32" /> {/* Submit button */}
          </div>
        </div>
      </section>

      {/* Footer Skeleton */}
      <footer className="py-6 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Skeleton className="h-6 w-48" /> {/* Footer text */}
          <div className="flex space-x-4">
            <Skeleton className="h-6 w-6 rounded-full" /> {/* Social icon */}
            <Skeleton className="h-6 w-6 rounded-full" />
            <Skeleton className="h-6 w-6 rounded-full" />
          </div>
        </div>
      </footer>
    </main>
  );
}
