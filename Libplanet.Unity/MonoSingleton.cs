#nullable disable
using UnityEngine;

namespace Libplanet.Unity
{
    /// <summary>
    /// A singleton implementation with <see cref="MonoBehaviour"/> as its base class.
    /// </summary>
    /// <typeparam name="T">The class to wrap with this singleton pattern.</typeparam>
    public abstract class MonoSingleton<T> : MonoBehaviour
        where T : MonoSingleton<T>
    {
        private static readonly object Lock = new object();
        private static T _instance = null;
        private static bool _applicationIsQuitting;

        /// <summary>
        /// The singleton instance of <see cref="MonoSingleton{T}"/>.
        /// </summary>
        public static T Instance
        {
            get
            {
                if (_applicationIsQuitting)
                {
                    Debug.Log(
                        $"[MonoSingleton]Instance '{typeof(T)}' " +
                        "already destroyed on application quit. " +
                        "Won't create again - returning null.");
                    return _instance;
                }

                lock (Lock)
                {
                    if (_instance != null)
                    {
                        return _instance;
                    }

                    _instance = (T)FindObjectOfType(typeof(T));

                    if (_instance == null)
                    {
                        _instance = new GameObject(
                            typeof(T).ToString(), typeof(T)).GetComponent<T>();

                        Debug.Log(_instance == null
                            ? $"[MonoSingleton]Something went really wrong - " +
                            "there should never be more than 1 singleton! " +
                            "Reopening the scene might fix it."
                            : $"[MonoSingleton]An instance of {typeof(T)} " +
                            "is needed in the scene, " +
                            "so '{_instance.name}' was created with DontDestroyOnLoad.");
                    }

                    if (FindObjectsOfType(typeof(T)).Length > 1)
                    {
                        Debug.Log(
                            $"[MonoSingleton]Something went really wrong - " +
                            "there should never be more than 1 singleton! " +
                            "Reopening the scene might fix it.");
                    }

                    return _instance;
                }
            }
        }

        /// <summary>
        /// Initialize <see cref="MonoSingleton{T}"/>.
        /// </summary>
        protected virtual void Awake()
        {
            if (_instance == null)
            {
#pragma warning disable S2696
                _instance = (T)this;
#pragma warning restore S2696

                DontDestroyOnLoad(gameObject);
            }
            else
            {
                Debug.Log($"{typeof(T)} already exist!");

                Destroy(gameObject);
            }
        }

        /// <summary>
        /// None.
        /// </summary>
        protected virtual void OnDestroy()
        {
        }

        /// <summary>
        /// Update _applicationIsQuitting status.
        /// </summary>
        protected virtual void OnApplicationQuit()
        {
#pragma warning disable S2696
            _applicationIsQuitting = true;
#pragma warning restore S2696
        }
    }
}
