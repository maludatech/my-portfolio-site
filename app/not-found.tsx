"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background px-6 py-16">
      <Card className="w-full max-w-lg shadow-lg border-none bg-card/95 backdrop-blur-sm">
        <CardHeader className="text-center space-y-1">
          <CardTitle className="text-5xl font-bold text-foreground tracking-tight">
            404
          </CardTitle>
          <p className="text-muted-foreground text-lg">Page Not Found</p>
        </CardHeader>

        <CardContent className="text-center space-y-6">
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            The page you're looking for doesn’t exist or has been moved.
            Double-check the URL or head back home.
          </p>

          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 transition"
          >
            <Link href="/">
              <Home className="mr-2 h-5 w-5" />
              Go Home
            </Link>
          </Button>
        </CardContent>
      </Card>
    </section>
  );
}
