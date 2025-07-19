import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X, Cookie, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("cookie-consent", JSON.stringify({
      essential: true,
      functional: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString()
    }));
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    localStorage.setItem("cookie-consent", JSON.stringify({
      essential: true,
      functional: false,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString()
    }));
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    // This would normally save individual preferences
    // For now, we'll just save essential cookies only
    handleRejectAll();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-fade-in">
      <Card className="max-w-6xl mx-auto p-6 border-primary/20 bg-background/95 backdrop-blur-md shadow-lg">
        {!showPreferences ? (
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
            <div className="flex items-start gap-3 flex-1">
              <Cookie className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">We use cookies</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We use cookies to enhance your browsing experience, serve personalized content, 
                  and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
                </p>
                <Link 
                  to="/cookie-policy" 
                  className="text-primary hover:underline text-sm font-medium inline-block mt-2"
                >
                  Learn more about our cookie policy
                </Link>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 lg:ml-4">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setShowPreferences(true)}
                className="whitespace-nowrap"
              >
                <Settings className="w-4 h-4 mr-2" />
                Preferences
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={handleRejectAll}
                className="whitespace-nowrap"
              >
                Reject All
              </Button>
              <Button 
                size="sm"
                onClick={handleAcceptAll}
                className="whitespace-nowrap bg-primary hover:bg-primary/90"
              >
                Accept All
              </Button>
            </div>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 lg:relative lg:top-0 lg:right-0"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <Settings className="w-5 h-5 text-primary" />
                Cookie Preferences
              </h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowPreferences(false)}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg bg-muted/30">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">Essential Cookies</h4>
                  <Badge variant="secondary">Required</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Necessary for the website to function properly. These cannot be disabled.
                </p>
              </div>

              <div className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">Functional Cookies</h4>
                  <Badge variant="outline">Optional</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Enable enhanced functionality and personalization features.
                </p>
              </div>

              <div className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">Analytics Cookies</h4>
                  <Badge variant="outline">Optional</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Help us understand how visitors interact with our website.
                </p>
              </div>

              <div className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">Marketing Cookies</h4>
                  <Badge variant="outline">Optional</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Used to deliver relevant advertisements and marketing content.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t">
              <Button 
                variant="outline" 
                onClick={() => setShowPreferences(false)}
                className="sm:mr-auto"
              >
                Back
              </Button>
              <Button 
                variant="outline" 
                onClick={handleRejectAll}
              >
                Reject All
              </Button>
              <Button 
                onClick={handleSavePreferences}
                className="bg-primary hover:bg-primary/90"
              >
                Save Preferences
              </Button>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};

export default CookieConsent;