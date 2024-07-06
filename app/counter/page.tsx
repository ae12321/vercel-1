import Counter from "@/components/counter/Counter";

// CounterPage(server component)内にCounter(client compoennt)を使用できる
export default function CounterPage() {
  return (
    <section>
      <Counter />
    </section>
  );
}
