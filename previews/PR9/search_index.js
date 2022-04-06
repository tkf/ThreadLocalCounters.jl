var documenterSearchIndex = {"docs":
[{"location":"#ThreadLocalCounters.jl","page":"ThreadLocalCounters.jl","title":"ThreadLocalCounters.jl","text":"","category":"section"},{"location":"","page":"ThreadLocalCounters.jl","title":"ThreadLocalCounters.jl","text":"ThreadLocalCounters\nThreadLocalCounters.@tlc\nThreadLocalCounters.list\nThreadLocalCounters.clear","category":"page"},{"location":"#ThreadLocalCounters","page":"ThreadLocalCounters.jl","title":"ThreadLocalCounters","text":"ThreadLocalCounters\n\n(Image: Dev) (Image: CI)\n\nThreadLocalCounters.jl provides a macro @tlc to associate a counter to a code location.\n\njulia> using ThreadLocalCounters\n\njulia> hello_world() = @tlc hello_world;\n\nThe installed counter can be enumerated using ThreadLocalCounters.list:\n\njulia> ThreadLocalCounters.list(; all = true)\n1-element Vector{ThreadLocalCounters.Internal.ThreadLocalCounter}:\n [0] hello_world @Main #= REPL[2]:2 =#\n\nThe thread-local counter is incremented each time the program hits the associated code location:\n\njulia> hello_world();\n\njulia> ThreadLocalCounters.list()\n1-element Vector{ThreadLocalCounters.Internal.ThreadLocalCounter}:\n [1] hello_world @Main #= REPL[2]:2 =#\n\njulia> hello_world();\n\njulia> ThreadLocalCounters.list()\n1-element Vector{ThreadLocalCounters.Internal.ThreadLocalCounter}:\n [2] hello_world @Main #= REPL[2]:2 =#\n\n\n\n\n\n","category":"module"},{"location":"#ThreadLocalCounters.@tlc","page":"ThreadLocalCounters.jl","title":"ThreadLocalCounters.@tlc","text":"@tlc [name]\n\nCount the time this expression is evaluated using thread-local counters.\n\nExamples\n\njulia> using ThreadLocalCounters\n\njulia> hello_world() = @tlc hello_world;\n\n\n\n\n\n","category":"macro"},{"location":"#ThreadLocalCounters.list","page":"ThreadLocalCounters.jl","title":"ThreadLocalCounters.list","text":"ThreadLocalCounters.list(; all = false)\n\nGet a list of all thread-local counters.  The caller must ensure that no thread is accessing the counters.\n\nPass all = true to include counters with zero counts.\n\n\n\n\n\n","category":"function"},{"location":"#ThreadLocalCounters.clear","page":"ThreadLocalCounters.jl","title":"ThreadLocalCounters.clear","text":"ThreadLocalCounters.clear()\n\nReset all counters. The caller must ensure that no thread is accessing the counters.\n\n\n\n\n\n","category":"function"}]
}
