// Each project carries a short `description` (for cards) and a longer `writeup`
// (for its detail page). Paragraphs in `writeup` are separated by a blank line.
// `type` ("calculator" | "geometry") builds the Desmos embed URL automatically.
export const projects = [
  {
    id: "lu9rtmbdeu",
    title: "Summed Iterative Residual Sinusoidal Regression",
    type: "calculator",
    category: "Regression",
    discovery: "Intentional",
    methods: ["Fourier", "sinusoidal", "iterative residual"],
    description: "Fourier-style interpolation by repeatedly fitting sinusoids to the running residual error.",
    writeup:
      "Start with a guess, measure what's left over, fit a sinusoid to that leftover, add it in, and repeat. Each pass targets the residual error the previous waves couldn't capture, and stacking enough of them reconstructs the target the same way a Fourier series does — as a sum of waves of increasing frequency.\n\nWhat makes this version interesting is that it's greedy: instead of solving for every coefficient at once, it peels off one dominant oscillation at a time. That's much closer in spirit to matching pursuit or boosting than to a classical Fourier transform. The part worth poking at is the convergence behaviour — how fast the residual shrinks, and whether it can stall on a component the sinusoidal basis can't represent.",
  },
  {
    id: "2bppcjja1k",
    title: "Overshoot-Controlled Lagrange via Nadaraya–Watson",
    type: "calculator",
    category: "Interpolation",
    discovery: "Intentional",
    methods: ["Lagrange", "Nadaraya–Watson", "overshoot control"],
    description: "Lagrange interpolation blended with Nadaraya–Watson weighting to suppress overshoot.",
    writeup:
      "Pure Lagrange interpolation is faithful to every data point but pays for it with wild swings between them. Nadaraya–Watson kernel regression is the opposite: smooth and well-behaved, but it doesn't pass through the points. This blends the two so you can dial between exactness and stability.\n\nThe kernel weighting damps the polynomial's tendency to overshoot near the edges, trading a little fidelity for a lot of calm. The real question is where the sweet spot sits — how much smoothing you can add before the curve stops honouring the data it's supposed to represent.",
  },
  {
    id: "ugmaarfjxa",
    title: "Gaussian Convolution Regression on Linear Interpolation",
    type: "calculator",
    category: "Regression",
    discovery: "Independent rediscovery",
    methods: ["Gaussian convolution", "Dirac delta", "kernel smoothing"],
    description: "Smearing the Dirac delta led to rediscovering Gaussian convolution, used as regression over linear interpolation with tunable adherence.",
    writeup:
      "This started as a question about the Dirac delta — an infinitely thin, infinitely tall spike. Smear it into a finite-width bump and you get a Gaussian; convolve a function with that Gaussian and you get a smoothed version of the function. That smoothing-by-convolution is exactly Gaussian kernel regression, rediscovered from the physics side rather than the statistics side.\n\nApplied to a linear interpolation, the width parameter controls how tightly the result hugs the original piecewise line versus how much it relaxes into a smooth trend. A wide kernel gives a gentle regression; a narrow kernel approaches the delta limit, where you recover the interpolation itself.",
  },
  {
    id: "lnnygbzpyi",
    title: "Corrected Stirling Approximation for Factorials",
    type: "calculator",
    category: "Approximation",
    discovery: "Accidental",
    methods: ["Stirling", "factorial", "small-x correction"],
    description: "Rediscovered Stirling's approximation, then corrected it to be exact for small x-values.",
    writeup:
      "Stirling's formula approximates n! with exponentials and a square-root term, and it's superb for large n — but it drifts for small values, exactly where the factorial is easiest to check by hand. This explores a correction that pins the approximation back to the true values at small x without spoiling the large-x asymptotics.\n\nIt's a clean illustration of a recurring theme in approximation: the leading term tells the asymptotic story, and the interesting engineering lives in the correction that buys accuracy in the regime the leading term neglects.",
  },
  {
    id: "os4qq2mx7e",
    title: "Repeated Pentagon Diagonals",
    type: "geometry",
    category: "Geometry",
    discovery: "Intentional",
    methods: ["polygon", "diagonals", "regularity error"],
    description: "Repeatedly drawing pentagon diagonals to amplify a hand-adjusted polygon's deviation from a regular one.",
    writeup:
      "A regular pentagon's diagonals form a perfect interior pentagram, and iterating that construction nests pentagons inside pentagons forever, each scaled by the golden ratio.\n\nStart from a slightly irregular pentagon instead, and the same iteration becomes an error amplifier: tiny deviations from regularity compound at every level, so a few iterations in, a polygon that looked almost regular is visibly distorted. It's a hands-on way to watch sensitivity to initial conditions play out in a purely geometric setting.",
  },
  {
    id: "5hd41qioaz",
    title: "Globally Accurate Cosine Approximation",
    type: "calculator",
    category: "Approximation",
    discovery: "Intentional",
    methods: ["cosine", "Bhaskara I"],
    description: "A cosine approximation more globally accurate than Bhaskara I, at the cost of generally higher pointwise error.",
    writeup:
      "Bhaskara I's millennia-old sine approximation is remarkably tight over its range with a simple rational form. This is a cosine approximation tuned for global accuracy — lower error averaged across the whole domain — even though it gives up some of the very low peak error Bhaskara achieves in its sweet spot.\n\nIt's the classic approximation-theory trade-off made concrete: minimize the worst-case error in one place, or spread the error out so nowhere is especially bad. Different objectives produce genuinely different best approximations.",
  },
  {
    id: "w6a2ljf5xe",
    title: "Logistically Windowed Kernel Regression",
    type: "geometry",
    category: "Regression",
    discovery: "Intentional",
    methods: ["kernel", "logistic window"],
    description: "Kernel regression using a logistic windowing function to localize influence.",
    writeup:
      "Kernel regression weights nearby points more than distant ones. Here the weighting window is a logistic (sigmoid) function, giving a soft but controllable cutoff — roughly flat influence inside the window, smoothly decaying outside it, with a tunable sharpness.\n\nCompared to a Gaussian's gentle infinite tails, the logistic window approximates compact support while staying smooth, which keeps far-away points from quietly biasing the fit.",
  },
  {
    id: "trou0pymbm",
    title: "Iterated Sine & the Fixed-Point Theorem",
    type: "calculator",
    category: "Fixed-point / Numerical",
    discovery: "Independent rediscovery",
    methods: ["iteration", "fixed point", "root finding"],
    description: "Repeatedly applying sine to x revealed the fixed-point theorem; explored isolating x to solve functions numerically.",
    writeup:
      "Take any number, press sin repeatedly, and watch it crawl toward 0 — the fixed point where sin(x) = x. That's the fixed-point theorem in action: iterating a contraction converges to the value the function leaves unchanged.\n\nThe powerful generalization is that you can engineer this. Rearrange an equation f(x) = 0 into the form x = g(x), iterate g, and the sequence converges to a root — an entire numerical root-finding method falling out of \"just keep applying the function.\" The catch, and the interesting part, is that convergence depends on g's slope at the fixed point being less than 1 in magnitude.",
  },
  {
    id: "tgv2qkzexb",
    title: "Chebyshev Interpolation with Node Visualization",
    type: "calculator",
    category: "Interpolation",
    discovery: "Intentional",
    methods: ["Chebyshev", "Lagrange", "nodes"],
    description: "Chebyshev interpolation with explicit node representation, compared against Lagrange interpolation.",
    writeup:
      "Interpolating at evenly spaced points is a trap: high-degree polynomials blow up near the endpoints — Runge's phenomenon. Chebyshev nodes fix this by clustering sample points toward the edges, following a cosine spacing that flattens the error across the whole interval.\n\nVisualizing the nodes makes the trick legible — you can see why the clustering tames the oscillation — and comparing directly against equally spaced Lagrange interpolation shows the difference starkly: same degree, same function, dramatically different edge behaviour.",
  },
  {
    id: "q3bolv3jws",
    title: "Lagrange with Logistic Basis (Runge Reduction)",
    type: "calculator",
    category: "Interpolation",
    discovery: "Intentional",
    methods: ["Lagrange", "logistic basis", "Runge phenomenon"],
    description: "Lagrange interpolation using a logistic basis function to reduce Runge's phenomenon.",
    writeup:
      "Standard Lagrange basis functions are polynomials, and their reach across the whole interval is what feeds Runge's oscillations. Swapping in a logistic-shaped basis localizes each basis function's influence, so a wiggle near one node doesn't propagate across the entire curve.\n\nIt's an alternative attack on the same problem Chebyshev nodes solve — but where Chebyshev moves the sample points, this changes the basis itself.",
  },
  {
    id: "v9vnbmhozu",
    title: "Approximating x² with cos(x)",
    type: "calculator",
    category: "Approximation",
    discovery: "Independent rediscovery",
    methods: ["cosine", "limit"],
    description: "Approximating x² with cos(x); found it is a known approximation that becomes equal in the limit.",
    writeup:
      "Near zero, cos(x) ≈ 1 − x²/2 — its Taylor expansion has a parabola hiding inside it. So a shifted, scaled cosine mimics x² locally, and this exploration found that the resemblance becomes exact in an appropriate limit.\n\nIt's a small, satisfying instance of a bigger pattern: many \"discoveries\" in self-directed math turn out to be known results approached from an unfamiliar direction — which is exactly how real intuition for them gets built.",
  },
  {
    id: "gmwz66750e",
    title: "Kernel Metaballs → Voronoi Diagram",
    type: "calculator",
    category: "Visualization",
    discovery: "Accidental",
    methods: ["metaballs", "kernel density", "Voronoi"],
    description: "Tuning kernel-density metaball parameters accidentally produced a Voronoi diagram.",
    writeup:
      "Metaballs are blobs defined by summed kernel-density fields: where the field crosses a threshold, you get a smooth merged surface. While tuning the kernel parameters, the smooth blobs sharpened into cells with straight boundaries — a Voronoi diagram, which partitions space by nearest center.\n\nThe connection is real. As the kernel becomes sharply peaked, \"sum of fields, take the dominant region\" degenerates into \"whichever center is closest,\" which is exactly the Voronoi rule. A happy accident that exposes a genuine limit relationship between two constructions that look unrelated.",
  },
  {
    id: "xbywzjj4o5",
    title: "Nested-Fraction Approximation of exp(−x²)",
    type: "calculator",
    category: "Approximation",
    discovery: "Intentional",
    methods: ["continued fraction", "Fibonacci polynomial", "Gaussian"],
    description: "A continued-fraction / Fibonacci-polynomial nested fraction approximating e^(−x²), equal in the limit.",
    writeup:
      "A continued-fraction-style nested expression, with Fibonacci-polynomial structure in the terms, built to approximate the Gaussian bell e^(−x²) and converge to it in the limit.\n\nContinued fractions often approximate functions faster and more stably than truncated power series — they can capture behaviour polynomials struggle with — so reaching for one to model a Gaussian is a sound instinct. The open questions are the convergence rate and where the approximation is tightest versus where it lags.",
  },
  {
    id: "4piiel1t2v",
    title: "Higher-Order Smoothstep & Infinite Differentiability",
    type: "calculator",
    category: "Approximation",
    discovery: "Intentional",
    methods: ["smoothstep", "differentiability", "asymptotics"],
    description: "Shifted higher-order smoothstep polynomials; infinite differentiability implies reaching ±1 only at ±∞.",
    writeup:
      "Smoothstep functions ease from 0 to 1 with matched derivatives at the ends; higher-order versions match more derivatives and look ever smoother. Pushing this led to a real insight: a function that is infinitely differentiable everywhere and monotonically approaches its limits can only actually reach −1 and +1 at −∞ and +∞.\n\nDemanding perfect smoothness everywhere forces the transition to take forever — you can't have infinite smoothness and a finite, clean arrival at the same time. That tension is the whole story behind bump functions and why genuine compact-support smoothness is such a special property.",
  },
  {
    id: "xtrvgpye8r",
    title: "Moving Average on Lagrange Interpolation",
    type: "calculator",
    category: "Interpolation",
    discovery: "Intentional",
    methods: ["moving average", "Lagrange", "Runge phenomenon"],
    description: "A moving average over Lagrange interpolation to reduce Runge's phenomenon, trading off accuracy.",
    writeup:
      "Another Runge's-phenomenon tamer: take the oscillation-prone Lagrange interpolant and run a moving average over it. The smoothing knocks down the high-frequency edge wiggles, at the cost of no longer passing exactly through the data points — you trade interpolation for regression.\n\nCompared to the logistic-basis and Chebyshev approaches, this is the bluntest instrument: it doesn't prevent the oscillation, it averages it away after the fact. Useful precisely because it's so simple to reason about.",
  },
  {
    id: "gouzeatzwa",
    title: "Moving Average on Bézier Curves",
    type: "geometry",
    category: "Regression",
    discovery: "Intentional",
    methods: ["Bézier", "moving average"],
    description: "Applying a moving average to Bézier curves to make them behave more like a regression.",
    writeup:
      "Bézier curves are already smooth, but they follow their control polygon loosely and can be yanked around by individual control points. Applying a moving average turns the curve into more of a regression — it tracks the general trend of the control points rather than reacting to each one.\n\nThat's exactly what you want when the control data is noisy or you'd rather have a calm path than a faithful one.",
  },
  {
    id: "meum475p1e",
    title: "Normal Distribution Approximations (tanh / logistic)",
    type: "calculator",
    category: "Approximation",
    discovery: "Intentional",
    methods: ["normal distribution", "tanh", "logistic"],
    description: "Approximating the normal distribution using tanh(x) and the logistic function.",
    writeup:
      "The Gaussian's cumulative distribution has no elementary closed form, which is a genuine nuisance in practice. The logistic function and tanh are S-shaped, elementary, and visually almost identical to the normal CDF — so they make excellent cheap stand-ins.\n\nThis explores how close you can get and how to scale them for the best match. The closeness isn't a coincidence: it's the same reason logistic regression and probit regression usually land on nearly the same answers.",
  },
  {
    id: "8f8shhkxiz",
    title: "Metaball Terrain Generation",
    type: "calculator",
    category: "Visualization",
    discovery: "Intentional",
    methods: ["metaballs", "kernel density", "terrain"],
    description: "Using kernel-density metaballs to generate rounded-mountain terrain.",
    writeup:
      "The same kernel-density metaball machinery, repurposed as a procedural terrain generator. Each kernel is a smooth hill; summing many of them produces rolling, rounded mountains with naturally soft valleys between peaks — no hard edges, because the underlying fields are smooth.\n\nIt's a clean demonstration that one mathematical primitive — a summed radial kernel field — can serve completely different ends depending on how you read its output: merged blobs, Voronoi cells, or a landscape.",
  },
  {
    id: "mxt5tphize",
    title: "Curvature-Minimizing Cosine Interpolation",
    type: "calculator",
    category: "Interpolation",
    discovery: "Intentional",
    methods: ["cosine", "curvature minimization", "oscillation"],
    description: "Minimizing curvature in the lowest-slope segment yields the least excessive oscillation.",
    writeup:
      "Cosine interpolation gives smooth transitions between points, but you still get to choose where to spend your smoothness budget. This investigates minimizing curvature segment by segment and surfaced a useful heuristic: minimizing curvature in the segment with the lowest slope produces the least excessive oscillation overall.\n\nIntuitively, the flat regions are where overshoot is most visible and most avoidable, so calming them first buys the biggest reduction in unwanted wiggle.",
  },
  {
    id: "wxaj8eznqj",
    title: "Summation Approximation of x/(x+3)",
    type: "calculator",
    category: "Series & Convergence",
    discovery: "Intentional",
    methods: ["series", "rational function"],
    description: "A summation-based approximation of the rational function x/(x+3).",
    writeup:
      "A simple rational function, x/(x+3), reconstructed as a summation — most likely a series expansion that converges to it over some range.\n\nRewriting a closed-form function as an infinite sum is the inverse of the usual move, and it's a good way to understand the function from the inside: where the series converges, how fast, and what the partial sums look like as they close in on the true value.",
  },
  {
    id: "f8a247e2fa",
    title: "Elliptic Regression Attempt",
    type: "calculator",
    category: "Regression",
    discovery: "Intentional",
    methods: ["ellipse", "conic fitting"],
    description: "An attempt at fitting an elliptic (conic) regression.",
    writeup:
      "Fitting a line is easy; fitting an ellipse to scattered points is genuinely hard. An ellipse is a constrained conic, and the \"distance from a point to an ellipse\" has no tidy closed form — so you're forced to choose between an algebraic distance that's easy to optimize and a geometric distance that's what you actually want.\n\nThis is an attempt at that fit, wrestling with the trade-off that makes conic fitting a real numerical problem rather than a textbook one.",
  },
  {
    id: "f59fb2d43c",
    title: "Excessive Numerical Prime Representation",
    type: "calculator",
    category: "Number Theory",
    discovery: "Intentional",
    methods: ["primes"],
    description: "An intentionally excessive numerical representation of the prime numbers.",
    writeup:
      "A deliberately over-the-top numerical depiction of the primes — pushing a formula or visualization well past what's strictly needed, partly for the fun of it and partly because primes reward staring at them from odd angles.\n\nThe primes resist clean formulas, so excessive, exploratory representations are a legitimate way to surface patterns — and to appreciate just how hard-won the patterns that do appear actually are.",
  },
  {
    id: "nqciqp1krv",
    title: "Normal-Reflection Single-Bounce Raytracer",
    type: "geometry",
    category: "Geometry",
    discovery: "Intentional",
    methods: ["reflection", "normals", "raytracing"],
    description: "Reflecting lines across surface normals as a one-degree (single-bounce) raytracer.",
    writeup:
      "Light hitting a surface reflects across the surface normal — angle in equals angle out. Implementing exactly that, once, gives a one-bounce raytracer: shoot a ray, find where it meets the surface, reflect it about the local normal, done.\n\nIt's the atomic operation that every full raytracer repeats recursively, so building the single-bounce version is the cleanest possible way to understand the whole technique before adding shadows, refraction, and multiple bounces.",
  },
  {
    id: "b3dd5eb4b2",
    title: "Perfect Road for a Given Wheel",
    type: "calculator",
    category: "Geometry",
    discovery: "Intentional",
    methods: ["polar→cartesian", "roulette curve"],
    description: "Constructing the perfect road for a given wheel via the Cartesian form of a polar function.",
    writeup:
      "For any wheel shape there's a matching road profile that keeps the axle perfectly level as the wheel rolls — the famous example being a square wheel riding a chain of inverted catenaries. This constructs that road from the wheel's polar description, converted into Cartesian form.\n\nThe relationship is a small marvel: \"rolls smoothly with a level axle\" is a precise mathematical condition linking the two curves, not a happy coincidence. Change the wheel and the road follows by the same rule.",
  },
  {
    id: "2f5ce082e6",
    title: "Perceived Acceleration of Time with Age",
    type: "calculator",
    category: "Modeling",
    discovery: "Intentional",
    methods: ["perception", "time", "rate of change"],
    description: "Modeling the perceived change in the perceived increase in the speed of time as age increases.",
    writeup:
      "The common feeling that years pass faster as you age has a tidy model: if each year is judged relative to your total life so far, then a year is a shrinking fraction of your experience — a logarithmic perception of time.\n\nThis goes a layer deeper, modeling the perceived change in that perceived speed-up. It's a nice case of taking a fuzzy subjective experience and turning it into something you can actually plot, differentiate, and reason about.",
  },
  {
    id: "10ad2453c8",
    title: "Tuning Geometric Series Convergence Speed",
    type: "calculator",
    category: "Series & Convergence",
    discovery: "Accidental",
    methods: ["geometric series", "convergence", "fractional ratio"],
    description: "Adjusting how fast a series converges to a target, accidentally finding fractional representations of geometric series.",
    writeup:
      "A geometric series sums to a clean closed value, and its ratio controls how fast it gets there. Playing with that convergence speed surfaced fractional representations of geometric series — ways to hit a target sum with a chosen rate of approach.\n\nIt's a hands-on route into how the ratio governs everything: too close to 1 and convergence crawls; small and it snaps to the limit almost immediately. The accident was finding that the same target can be reached along many different speeds.",
  },
];

export const desmosUrl = (p) => `https://www.desmos.com/${p.type === "geometry" ? "geometry" : "calculator"}/${p.id}`;

export const getProject = (id) => projects.find((p) => p.id === id);

export function getAdjacent(id) {
  const i = projects.findIndex((p) => p.id === id);
  return {
    prev: i > 0 ? projects[i - 1] : null,
    next: i >= 0 && i < projects.length - 1 ? projects[i + 1] : null,
  };
}

