const pjsd_core_1 = require("@preemptive/pjsd-core");

export default function jsDefender (options = {})
{
	return {
		name: "jsdefender",
		async renderChunk (code, ChunkInfo)
		{
			// --- Overwrite the chunk by the protected code
			const protectedCode = await protectCode(code, options);
			return {
				code: protectedCode
			};
		}
	};
}

function protectCode(source, options)
{
	return new Promise((resolve, reject) => 
	{
		// --- Check if source code is provided
		if (source === null) {
			return reject("Source code to protect is not provided.");
		}

		// --- Prepare the configuration manager
		const manager = new pjsd_core_1.ProtectionManager(options.quietMode ? undefined : pjsd_core_1.onDefaultLogEntry);
		
		// --- Now, it's time to protect the code
		manager.protectSource(source, options)
			.then((protectedCode) => resolve(protectedCode))
			.catch((err) => reject(err));
	});
}