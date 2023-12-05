function dijkstra(graph, sourceNode) {
    var visited = []; 
    var dist = []; 

    for (var i = 0; i < graph.length; i++)
    {
        if (i == sourceNode)
        {
            dist[i] = [0, i]; 
        }
        else 
        {
            dist[i] = [Infinity, i]; 
        }

        visited[i] = false; 
    }

    var marked = 0; 

    while (marked < graph.length)
    {
        next = [Infinity, -1]; 

        for (var i = 0; i < graph.length; i++)
        {
            if (visited[i] == false && dist[i][0] < next[0])
            {
                next = [dist[i][0], i]; 
            }
        }

        for (j = 0; j < graph.length; j++)
        {
            if (next[1] >= 0 && graph[next[1]][j] > 0)
            {
                dist[j][0] = Math.min(dist[j][0], next[0] + graph[next[1]][j]); 
            }
        }

        marked++; 
        visited[next[1]] = true; 
    }

    return dist;
}