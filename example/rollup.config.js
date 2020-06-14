import jsDefender from '../src/index.js'

export default 
[{
    input: 'example/test.js',
	output:
	{
    	file: 'example/dist/test.min.js',
    	format: 'iife'
    },
    plugins: [jsDefender(
		{
			stringLiterals:true,
			quietMode: true
		})]
}]