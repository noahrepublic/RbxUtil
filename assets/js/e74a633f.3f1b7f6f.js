"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[341],{8050:function(e){e.exports=JSON.parse('{"functions":[{"name":"Copy","desc":"Creates a copy of the given table. By default, a shallow copy is\\nperformed. For deep copies, a second boolean argument must be\\npassed to the function.\\n\\n:::caution No cyclical references\\nDeep copies are _not_ protected against cyclical references. Passing\\na table with cyclical references _and_ the `deep` parameter set to\\n`true` will result in a stack-overflow.","params":[{"name":"tbl","desc":"Table to copy","lua_type":"table"},{"name":"deep","desc":"Whether or not to perform a deep copy","lua_type":"boolean?"}],"returns":[{"desc":"","lua_type":"table"}],"function_type":"static","source":{"line":77,"path":"packages/table-util/init.lua"}},{"name":"Sync","desc":"Synchronizes the `srcTbl` based on the `templateTbl`. This will make\\nsure that `srcTbl` has all of the same keys as `templateTbl`, including\\nremoving keys in `srcTbl` that are not present in `templateTbl`.","params":[{"name":"srcTbl","desc":"Source table","lua_type":"table"},{"name":"templateTbl","desc":"Template table","lua_type":"table"}],"returns":[{"desc":"","lua_type":"table"}],"function_type":"static","source":{"line":116,"path":"packages/table-util/init.lua"}},{"name":"SwapRemove","desc":"Removes index `i` in the table by swapping the value at `i` with\\nthe last value in the array, and then trimming off the last\\nvalue from the array.\\n\\nThis allows removal of the value at `i` in `O(1)` time, but does\\nnot preserve array ordering. If a value needs to be removed from\\nan array, but ordering of the array does not matter, using\\n`SwapRemove` is always preferred over `table.remove`.\\n\\nIn the following example, we remove \\"B\\" at index 2. SwapRemove does\\nthis by moving the last value \\"E\\" over top of \\"B\\", and then trimming\\noff \\"E\\" at the end of the array:\\n```lua\\nlocal t = {\\"A\\", \\"B\\", \\"C\\", \\"D\\", \\"E\\"}\\nTableUtil.SwapRemove(t, 2) -- Remove \\"B\\"\\nprint(t) --\x3e {\\"A\\", \\"E\\", \\"C\\", \\"D\\"}\\n```\\n\\n:::note Arrays only\\nThis function works on arrays, but not dictionaries.","params":[{"name":"tbl","desc":"Array","lua_type":"table"},{"name":"i","desc":"Index","lua_type":"number"}],"returns":[],"function_type":"static","source":{"line":196,"path":"packages/table-util/init.lua"}},{"name":"SwapRemoveFirstValue","desc":"Performs `table.find(tbl, v)` to find the index of the given\\nvalue, and then performs `TableUtil.SwapRemove` on that index.\\n\\n```lua\\nlocal t = {\\"A\\", \\"B\\", \\"C\\", \\"D\\", \\"E\\"}\\nTableUtil.SwapRemoveFirstValue(t, \\"C\\")\\nprint(t) --\x3e {\\"A\\", \\"B\\", \\"E\\", \\"D\\"}\\n```\\n\\n:::note Arrays only\\nThis function works on arrays, but not dictionaries.","params":[{"name":"tbl","desc":"Array","lua_type":"table"},{"name":"v","desc":"Value to find","lua_type":"any"}],"returns":[{"desc":"","lua_type":"number?"}],"function_type":"static","source":{"line":222,"path":"packages/table-util/init.lua"}},{"name":"Map","desc":"Performs a map operation against the given table, which can be used to\\nmap new values based on the old values at given keys/indices.\\n\\nFor example:\\n\\n```lua\\nlocal t = {A = 10, B = 20, C = 30}\\nlocal t2 = TableUtil.Map(t, function(key, value)\\n\\treturn value * 2\\nend)\\nprint(t2) --\x3e {A = 20, B = 40, C = 60}\\n```","params":[{"name":"tbl","desc":"","lua_type":"table"},{"name":"predicate","desc":"","lua_type":"(value: any, key: any, tbl: table) -> newValue: any"}],"returns":[{"desc":"","lua_type":"table"}],"function_type":"static","source":{"line":251,"path":"packages/table-util/init.lua"}},{"name":"Filter","desc":"Performs a filter operation against the given table, which can be used to\\nfilter out unwanted values from the table.\\n\\nFor example:\\n\\n```lua\\nlocal t = {A = 10, B = 20, C = 30}\\nlocal t2 = TableUtil.Filter(t, function(key, value)\\n\\treturn value > 15\\nend)\\nprint(t2) --\x3e {B = 40, C = 60}\\n```","params":[{"name":"tbl","desc":"","lua_type":"table"},{"name":"predicate","desc":"","lua_type":"(value: any, key: any, tbl: table) -> keep: boolean"}],"returns":[{"desc":"","lua_type":"table"}],"function_type":"static","source":{"line":282,"path":"packages/table-util/init.lua"}},{"name":"Reduce","desc":"Performs a reduce operation against the given table, which can be used to\\nreduce the table into a single value. This could be used to sum up a table\\nor transform all the values into a compound value of any kind.\\n\\nFor example:\\n\\n```lua\\nlocal t = {10, 20, 30, 40}\\nlocal result = TableUtil.Filter(t, function(accum, value)\\n\\treturn accum + value\\nend)\\nprint(result) --\x3e 100\\n```","params":[{"name":"tbl","desc":"","lua_type":"table"},{"name":"predicate","desc":"","lua_type":"(accumulator: any, value: any, index: any, tbl: table) -> result: any"}],"returns":[{"desc":"","lua_type":"table"}],"function_type":"static","source":{"line":326,"path":"packages/table-util/init.lua"}},{"name":"Assign","desc":"Copies all values of the given tables into the `target` table.\\n\\n```lua\\nlocal t = {A = 10}\\nlocal t2 = {B = 20}\\nlocal t3 = {C = 30, D = 40}\\nlocal newT = TableUtil.Assign(t, t2, t3)\\nprint(newT) --\x3e {A = 10, B = 20, C = 30, D = 40}\\n```","params":[{"name":"target","desc":"","lua_type":"table"},{"name":"...","desc":"","lua_type":"table"}],"returns":[{"desc":"","lua_type":"table"}],"function_type":"static","source":{"line":370,"path":"packages/table-util/init.lua"}},{"name":"Extend","desc":"Extends the target array with the extension array.\\n\\n```lua\\nlocal t = {10, 20, 30}\\nlocal t2 = {30, 40, 50}\\nlocal tNew = TableUtil.Extend(t, t2)\\nprint(tNew) --\x3e {10, 20, 30, 30, 40, 50}\\n```\\n\\n:::note Arrays only\\nThis function works on arrays, but not dictionaries.","params":[{"name":"target","desc":"","lua_type":"table"},{"name":"extension","desc":"","lua_type":"table"}],"returns":[{"desc":"","lua_type":"table"}],"function_type":"static","source":{"line":400,"path":"packages/table-util/init.lua"}},{"name":"Reverse","desc":"Reverses the array.\\n\\n```lua\\nlocal t = {1, 5, 10}\\nlocal tReverse = TableUtil.Reverse(t)\\nprint(tReverse) --\x3e {10, 5, 1}\\n```\\n\\n:::note Arrays only\\nThis function works on arrays, but not dictionaries.","params":[{"name":"tbl","desc":"","lua_type":"table"}],"returns":[{"desc":"","lua_type":"table"}],"function_type":"static","source":{"line":426,"path":"packages/table-util/init.lua"}},{"name":"Shuffle","desc":"Shuffles the table.\\n\\n```lua\\nlocal t = {1, 2, 3, 4, 5, 6, 7, 8, 9}\\nlocal shuffled = TableUtil.Shuffle(t)\\nprint(shuffled) --\x3e e.g. {9, 4, 6, 7, 3, 1, 5, 8, 2}\\n```\\n\\n:::note Arrays only\\nThis function works on arrays, but not dictionaries.","params":[{"name":"tbl","desc":"","lua_type":"table"},{"name":"rngOverride","desc":"","lua_type":"Random?"}],"returns":[{"desc":"","lua_type":"table"}],"function_type":"static","source":{"line":454,"path":"packages/table-util/init.lua"}},{"name":"Sample","desc":"Returns a random sample of the table.\\n\\n```lua\\nlocal t = {1, 2, 3, 4, 5, 6, 7, 8, 9}\\nlocal sample = TableUtil.Sample(t, 3)\\nprint(sample) --\x3e e.g. {6, 2, 5}\\n```\\n\\n:::note Arrays only\\nThis function works on arrays, but not dictionaries.","params":[{"name":"tbl","desc":"","lua_type":"table"},{"name":"sampleSize","desc":"","lua_type":"number"},{"name":"rngOverride","desc":"","lua_type":"Random?"}],"returns":[{"desc":"","lua_type":"table"}],"function_type":"static","source":{"line":485,"path":"packages/table-util/init.lua"}},{"name":"Flat","desc":"Returns a new table where all sub-arrays have been\\nbubbled up to the top. The depth at which the scan\\nis performed is dictated by the `depth` parameter,\\nwhich is set to `1` by default.\\n\\n```lua\\nlocal t = {{10, 20}, {90, 100}, {30, 15}}\\nlocal flat = TableUtil.Flat(t)\\nprint(flat) --\x3e {10, 20, 90, 100, 30, 15}\\n```\\n\\n:::note Arrays only\\nThis function works on arrays, but not dictionaries.","params":[{"name":"tbl","desc":"","lua_type":"table"},{"name":"depth","desc":"","lua_type":"number?"}],"returns":[{"desc":"","lua_type":"table"}],"function_type":"static","source":{"line":523,"path":"packages/table-util/init.lua"}},{"name":"FlatMap","desc":"Calls `TableUtil.Map` on the given table and predicate, and then\\ncalls `TableUtil.Flat` on the result from the map operation.\\n\\n```lua\\nlocal t = {10, 20, 30}\\nlocal result = TableUtil.FlatMap(t, function(value)\\n\\treturn {value, value * 2}\\nend)\\nprint(result) --\x3e {10, 20, 20, 40, 30, 60}\\n```\\n\\n:::note Arrays only\\nThis function works on arrays, but not dictionaries.","params":[{"name":"tbl","desc":"","lua_type":"table"},{"name":"predicate","desc":"","lua_type":"(key: any, value: any, tbl: table) -> newValue: any"}],"returns":[{"desc":"","lua_type":"table"}],"function_type":"static","source":{"line":561,"path":"packages/table-util/init.lua"}},{"name":"Keys","desc":"Returns an array with all the keys in the table.\\n\\n```lua\\nlocal t = {A = 10, B = 20, C = 30}\\nlocal keys = TableUtil.Keys(t)\\nprint(keys) --\x3e {\\"A\\", \\"B\\", \\"C\\"}\\n```\\n\\n:::caution Ordering\\nThe ordering of the keys is never guaranteed. If order is imperative, call\\n`table.sort` on the resulting `keys` array.\\n```lua\\nlocal keys = TableUtil.Keys(t)\\ntable.sort(keys)\\n```","params":[{"name":"tbl","desc":"","lua_type":"table"}],"returns":[{"desc":"","lua_type":"table"}],"function_type":"static","source":{"line":588,"path":"packages/table-util/init.lua"}},{"name":"Find","desc":"Performs a linear scan across the table and calls `callback` on\\neach item in the array. Returns the value and key of the first\\npair in which the callback returns `true`.\\n\\n```lua\\nlocal t = {\\n\\t{Name = \\"Bob\\", Age = 20};\\n\\t{Name = \\"Jill\\", Age = 30};\\n\\t{Name = \\"Ann\\", Age = 25};\\n}\\n\\n-- Find first person who has a name starting with J:\\nlocal firstPersonWithJ = TableUtil.Find(t, function(person)\\n\\treturn person.Name:sub(1, 1):lower() == \\"j\\"\\nend)\\n\\nprint(firstPersonWithJ) --\x3e {Name = \\"Jill\\", Age = 30}\\n```\\n\\n:::caution Dictionary Ordering\\nWhile `Find` can also be used with dictionaries, dictionary ordering is never\\nguaranteed, and thus the result could be different if there are more\\nthan one possible matches given the data and callback function.","params":[{"name":"tbl","desc":"","lua_type":"table"},{"name":"callback","desc":"","lua_type":"(value: any, index: any, tbl: table) -> boolean"}],"returns":[{"desc":"","lua_type":"(value: any?, key: any?)"}],"function_type":"static","source":{"line":628,"path":"packages/table-util/init.lua"}},{"name":"Every","desc":"Returns `true` if the `callback` also returns `true` for _every_\\nitem in the table.\\n\\n```lua\\nlocal t = {10, 20, 40, 50, 60}\\n\\nlocal allAboveZero = TableUtil.Every(t, function(value)\\n\\treturn value > 0\\nend)\\n\\nprint(\\"All above zero:\\", allAboveZero) --\x3e All above zero: true\\n```","params":[{"name":"tbl","desc":"","lua_type":"table"},{"name":"callback","desc":"","lua_type":"(value: any, index: any, tbl: table) -> boolean"}],"returns":[{"desc":"","lua_type":"boolean"}],"function_type":"static","source":{"line":658,"path":"packages/table-util/init.lua"}},{"name":"Some","desc":"Returns `true` if the `callback` also returns `true` for _at least\\none_ of the items in the table.\\n\\n```lua\\nlocal t = {10, 20, 40, 50, 60}\\n\\nlocal someBelowTwenty = TableUtil.Some(t, function(value)\\n\\treturn value < 20\\nend)\\n\\nprint(\\"Some below twenty:\\", someBelowTwenty) --\x3e Some below twenty: true\\n```","params":[{"name":"tbl","desc":"","lua_type":"table"},{"name":"callback","desc":"","lua_type":"(value: any, index: any, tbl: table) -> boolean"}],"returns":[{"desc":"","lua_type":"boolean"}],"function_type":"static","source":{"line":688,"path":"packages/table-util/init.lua"}},{"name":"Truncate","desc":"Returns a new table truncated to the length of `length`.\\n\\n```lua\\nlocal t = {10, 20, 30, 40, 50, 60, 70, 80}\\nlocal tTruncated = TableUtil.Truncate(t, 3)\\nprint(tTruncated) --\x3e {10, 20, 30}\\n```","params":[{"name":"tbl","desc":"","lua_type":"table"},{"name":"length","desc":"","lua_type":"number"}],"returns":[{"desc":"","lua_type":"table"}],"function_type":"static","source":{"line":713,"path":"packages/table-util/init.lua"}},{"name":"Zip","desc":"Returns an iterator that can scan through multiple tables at the same time side-by-side, matching\\nagainst shared keys/indices.\\n\\n```lua\\nlocal t1 = {10, 20, 30, 40, 50}\\nlocal t2 = {60, 70, 80, 90, 100}\\n\\nfor key,values in TableUtil.Zip(t1, t2) do\\n\\tprint(key, values)\\nend\\n\\n--[[\\n\\tOutputs:\\n\\t1 {10, 60}\\n\\t2 {20, 70}\\n\\t3 {30, 80}\\n\\t4 {40, 90}\\n\\t5 {50, 100}\\n--]]\\n```","params":[{"name":"...","desc":"","lua_type":"table"}],"returns":[{"desc":"","lua_type":"(iter: (t: table, k: any) -> (key: any?, values: table?), tbl: table, startIndex: any?)"}],"function_type":"static","source":{"line":745,"path":"packages/table-util/init.lua"}},{"name":"IsEmpty","desc":"Returns `true` if the given table is empty. This is\\nsimply performed by checking if `next(tbl)` is `nil`\\nand works for both arrays and dictionaries. This is\\nuseful when needing to check if a table is empty but\\nnot knowing if it is an array or dictionary.","params":[{"name":"tbl","desc":"","lua_type":"table"}],"returns":[{"desc":"","lua_type":"boolean"}],"function_type":"static","source":{"line":793,"path":"packages/table-util/init.lua"}},{"name":"EncodeJSON","desc":"Proxy for [`HttpService:JSONEncode`](https://developer.roblox.com/en-us/api-reference/function/HttpService/JSONEncode).","params":[{"name":"value","desc":"","lua_type":"any"}],"returns":[{"desc":"","lua_type":"string"}],"function_type":"static","source":{"line":806,"path":"packages/table-util/init.lua"}},{"name":"DecodeJSON","desc":"Proxy for [`HttpService:JSONDecode`](https://developer.roblox.com/en-us/api-reference/function/HttpService/JSONDecode).","params":[{"name":"value","desc":"","lua_type":"any"}],"returns":[{"desc":"","lua_type":"string"}],"function_type":"static","source":{"line":819,"path":"packages/table-util/init.lua"}}],"properties":[],"types":[],"name":"TableUtil","desc":"A collection of helpful table utility functions. Many of these functions are carried over from JavaScript or\\nPython that are not present in Lua.\\n\\nTables that only work specifically with arrays or dictionaries are marked as such in the documentation.\\n\\n:::info Immutability\\nAll functions (_except_ `FastRemove` and `FastRemoveFirstValue`) treat tables as immutable and will return\\ncopies of the given table(s) with the operations performed on the copies.","source":{"line":55,"path":"packages/table-util/init.lua"}}')}}]);