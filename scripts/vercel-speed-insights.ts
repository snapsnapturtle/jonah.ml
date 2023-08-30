const vitalsUrl = 'https://vitals.vercel-analytics.com/v1/vitals';

function getConnectionSpeed(): string {
    // @ts-ignore
    return 'connection' in navigator && navigator['connection'] && 'effectiveType' in navigator['connection']
        ? navigator['connection']['effectiveType']
        : '';
}

interface Metric {
    id: string;
    name: string;
    value: number;
}

export function sendToVercelAnalytics(metric: Metric): void {
    const analyticsId = process.env.VERCEL_ANALYTICS_ID;
    if (!analyticsId) {
        return;
    }

    const body: Record<string, string> = {
        dsn: analyticsId,
        id: metric.id,
        page: window.location.pathname,
        href: window.location.href,
        event_name: metric.name,
        value: metric.value.toString(),
        speed: getConnectionSpeed()
    };

    const blob = new Blob([new URLSearchParams(body).toString()], {
        // This content type is necessary for `sendBeacon`
        type: 'application/x-www-form-urlencoded'
    });
    if (navigator.sendBeacon) {
        navigator.sendBeacon(vitalsUrl, blob);
    } else
        void fetch(vitalsUrl, {
            body: blob,
            method: 'POST',
            credentials: 'omit',
            keepalive: true
        });
}

const reportWebVitals = (onPerfEntry: (perfData: unknown) => void) => {
    if (onPerfEntry && onPerfEntry instanceof Function) {
        import('web-vitals').then(({ onCLS, onFID, onFCP, onLCP, onTTFB }) => {
            onCLS(onPerfEntry);
            onFID(onPerfEntry);
            onFCP(onPerfEntry);
            onLCP(onPerfEntry);
            onTTFB(onPerfEntry);
        });
    }
};

reportWebVitals(sendToVercelAnalytics);
