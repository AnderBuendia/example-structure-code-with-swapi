import { useEffect } from 'react';

export function useCustomFetch() {
  let controller: AbortController;

  const customFetch = async (url: string, controller?: AbortController) => {
    try {
      const response = await window.fetch(url, { signal: controller?.signal });

      return response;
    } catch (error: any) {
      throw error;
    }
  };

  useEffect(() => {
    return () => cancelCustomFetch();
  }, []);

  function cancelCustomFetch() {
    controller && controller.abort();
  }

  return { customFetch };
}
