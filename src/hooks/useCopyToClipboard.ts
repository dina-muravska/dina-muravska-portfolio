import { useState, useCallback } from 'react';

export function useCopyToClipboard(timeout = 2000) {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const copy = useCallback((text: string, onCopySuccess?: () => void) => {
    if (!navigator?.clipboard) {
      console.warn('Clipboard not supported');
      return false;
    }

    navigator.clipboard.writeText(text).then(() => {
      setCopiedText(text);
      if (onCopySuccess) onCopySuccess();
      setTimeout(() => {
        setCopiedText(null);
      }, timeout);
    });
    return true;
  }, [timeout]);

  return { copy, copiedText, isCopied: Boolean(copiedText) };
}
