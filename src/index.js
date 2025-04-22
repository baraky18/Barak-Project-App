import Resolver from '@forge/resolver';
import api, { route } from '@forge/api';

const resolver = new Resolver();

resolver.define('getEpicStatusCounts', async ({ payload }) => {
  const { jql } = payload;

  console.log("Received JQL:", jql);

  const response = await api.asApp().requestJira(
    route`/rest/api/3/search?jql=${jql}&fields=status`
//    route`/rest/api/3/search?fields=status`
  );

  const data = await response.json();

  console.log("Received data:", data);

  const counts = {};
  data.issues.forEach(issue => {
    const status = issue.fields.status?.name || 'Unknown';
    counts[status] = (counts[status] || 0) + 1;
  });

  return counts;
});

export const handler = resolver.getDefinitions();
