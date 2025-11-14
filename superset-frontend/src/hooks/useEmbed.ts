import { useEffect, useState } from 'react';

export function useEmbed() {
  const [embed, setEmbed] = useState(false);

  useEffect(() => {
    try {
      // Compare window.self and window.top — if not equal, it's inside an iframe
      setEmbed(window.self !== window.top);
    } catch (err) {
      // Access to window.top can throw if cross-origin — treat as embedded
      setEmbed(true);
    }
  }, []);

  return embed;
}
