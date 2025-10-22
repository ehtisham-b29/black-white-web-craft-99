import { useState, useEffect } from "react";
import { Card } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import { X, Cookie, Settings } from "lucide-react";
import { Link } from "react-router";

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
      <Card className="max-w-6xl mx-auto p-6 border-primary-foreground/20 bg-primary backdrop-blur-md shadow-lg">
        {!showPreferences ? (
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
            <div className="flex items-start gap-3 flex-1">
              <Cookie className="w-6 h-6 text-primary-foreground mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2 text-primary-foreground">We use cookies</h3>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">
                  We use cookies to enhance your browsing experience, serve personalized content, 
                  and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
                </p>
                <Link
                  to="/cookie-policy"
                  className="text-primary-foreground hover:underline text-sm font-medium inline-block mt-2"
                >
                  Learn more about our cookie policy
                </Link>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 lg:ml-4">
              <Button
                size="sm"
                onClick={() => setShowPreferences(true)}
                className="whitespace-nowrap bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                <Settings className="w-4 h-4 mr-2" />
                Preferences
              </Button>
              <Button
                size="sm"
                onClick={handleRejectAll}
                className="whitespace-nowrap bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                Reject All
              </Button>
              <Button
                size="sm"
                onClick={handleAcceptAll}
                className="whitespace-nowrap bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                Accept All
              </Button>
            </div>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 lg:relative lg:top-0 lg:right-0 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-lg flex items-center gap-2 text-primary-foreground">
                <Settings className="w-5 h-5 text-primary-foreground" />
                Cookie Preferences
              </h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowPreferences(false)}
                className="text-primary-foreground hover:bg-primary-foreground/10"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 border border-primary-foreground/20 rounded-lg bg-primary-foreground/5">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-primary-foreground">Essential Cookies</h4>
                  <Badge variant="secondary" className="bg-primary-foreground/20 text-primary-foreground">Required</Badge>
                </div>
                <p className="text-sm text-primary-foreground/70">
                  Necessary for the website to function properly. These cannot be disabled.
                </p>
              </div>

              <div className="p-4 border border-primary-foreground/20 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-primary-foreground">Functional Cookies</h4>
                  <Badge variant="outline" className="border-primary-foreground/20 text-primary-foreground">Optional</Badge>
                </div>
                <p className="text-sm text-primary-foreground/70">
                  Enable enhanced functionality and personalization features.
                </p>
              </div>

              <div className="p-4 border border-primary-foreground/20 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-primary-foreground">Analytics Cookies</h4>
                  <Badge variant="outline" className="border-primary-foreground/20 text-primary-foreground">Optional</Badge>
                </div>
                <p className="text-sm text-primary-foreground/70">
                  Help us understand how visitors interact with our website.
                </p>
              </div>

              <div className="p-4 border border-primary-foreground/20 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-primary-foreground">Marketing Cookies</h4>
                  <Badge variant="outline" className="border-primary-foreground/20 text-primary-foreground">Optional</Badge>
                </div>
                <p className="text-sm text-primary-foreground/70">
                  Used to deliver relevant advertisements and marketing content.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-primary-foreground/20">
              <Button
                onClick={() => setShowPreferences(false)}
                className="sm:mr-auto bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                Back
              </Button>
              <Button
                onClick={handleRejectAll}
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                Reject All
              </Button>
              <Button
                onClick={handleSavePreferences}
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
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